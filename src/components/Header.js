import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useCallback, useEffect, useState } from "react";
import { MENU_ICON, USER_ICON, YOUTUBE_ICON, YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";


const Header = () => {
    const [searchQuery,setSearchQuery] = useState("");
    const [ suggestions,setSuggestions] =useState([])
    const [showSuggestions,setShowSuggestions] = useState(false);
    
    const dispatch = useDispatch();

    const searchCache = useSelector((store)=>store.search);

    useEffect(()=>{
        // make api call after every key press
        // but if diff b/w 2 api calls is <200ms
        //decline api call
        const timer = setTimeout(()=>{
            if(searchCache[searchQuery]){
                setSuggestions(searchCache[searchQuery]);
            }else{
                getSearchSuggestions();
            }
        },200);

        return()=>{
            clearTimeout(timer);
        };

    },[searchQuery]);

    const getSearchSuggestions = async () =>{
        // console.log("API CALL- " + searchQuery);
        const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
        const json = await data.json();
        // console.log(json[1]);
        setSuggestions(json[1]);

        //update cache
        dispatch(cacheResults({
            [searchQuery]: json[1],
        }));
    };

    

    const toggleMenueHandler = () =>{
        dispatch(toggleMenu())
    };
    const handleFocus = useCallback(() => {
        setShowSuggestions(true);
      }, []);
      const handleBlur = useCallback(() => {
        setShowSuggestions(false);
      }, []);

  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg">
        <div className="flex col-span-1"> 
            <img 
            onClick={() => toggleMenueHandler()}
            className="h-8 cursor-pointer" 
            alt="menu" 
            src={MENU_ICON}
            />
            <a href="/">
            <img className="h-8 mx-2"
            alt="youtube-logo"
            src={YOUTUBE_ICON}
            />
            </a>
        </div>
        <div className="col-span-10 px-16">
            <div>
            <input className="w-2/3 border border-gray-400 p-2 rounded-l-full" 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
            <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-200">🔍</button>
            </div>
            {showSuggestions &&(
            <div className="absolute bg-white py-2 px-2 w-[31.5rem] shadow-lg rounded-lg border border-gray-400">
                <ul>
                    { suggestions.map((s) => (<li  key ={s}className="py-2 px-3 shadow-sm hover:bg-gray-100">🔍{s}
                    </li>  
                    ))}                    
                </ul>
            </div>)}
        </div>
        <div className="col-span-1">
            <img className="h-8"
            alt="user-icon"
            src={USER_ICON}
            />
        </div>
    </div>
  )
}

export default Header;