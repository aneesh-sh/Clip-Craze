import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useCallback, useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constant";


const Header = () => {
    const [searchQuery,setSearchQuery] = useState("");
    const [ suggestions,setSuggestions] =useState([])
    const [showSuggestions,setShowSuggestions] = useState(false);

    useEffect(()=>{
        // make api call after every key press
        // but if diff b/w 2 api calls is <200ms
        //decline api call
        const timer = setTimeout(()=>getSearchSuggestions(),200);

        return()=>{
            clearTimeout(timer);
        };

    },[searchQuery]);

    const getSearchSuggestions = async () =>{
        console.log("API CALL- " + searchQuery);
        const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
        const json = await data.json();
        // console.log(json[1]);
        setSuggestions(json[1]);
    };

    const dispatch = useDispatch();

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
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8iICGSkZIkHyEPDA3z8vIyMTEhGx40MDEeHB4jICEeHR4AAAAxMTEgHh4gHB3W1tYtKyyXlpe6uroKBQhzcnJ+fX7CwsKysrJmZWX19fXk5OQYFhc5ODgoJidta2xUVFRfXV7Kysqsq6yjo6MHDa+eAAAB8UlEQVR4nO3c3VLaQBgGYJY/IQtE1Iogrfbn/q+xCaQ2TqtFm222+jwHDC8MMO8EdjnY+QYDAAAAAAAAAAAAAAAAeI/OL4Z5uDhP0m+yXYwzcbX4cJug4d045GN8Pem84GYd+67VUq6/dN7wou9Sjy1u0jQcjUZ9V2skaHhZfUuLbBrGYtN5w8F2HLNpGFOsNIPddlo3XGUgTK9T7BbVFzWbHX+zS1IQAAAAAAAAAABeZJKHVPXO76dHs9msul1OH+JfpOmr0ufuz15Wbhb78uzBvJzPWym2U/XU6Sk+lc6eTnEfv3Zf8PZjeTib2AihnYpwOJl5Qhp1kULY33d/1Pvbp9XTDcO/bhjGl503HD5uUX/Mn1PxTPr964pTUkhygra+hj9U16V10LS6+/pUtFLxTAo/00GCa1j/DhtFDw2Lxw1T/A7rtTRWS+ZhES2rdS3O22lep/qBX1LZSmetFI+pfvzk1HximrW03g9ns4edadboIy2XafbDWt9/Zhqp6gEAAAAAAAAAwAu89Zl7u+00xFXse2ZiLdHcxO24PLx7DpLMvrxcHy9f3+WOUswvHYZVRg2TTNktqnqjTCa0Jmm4WZcZNUwxC3pwd5VPwyLJlN3JdnHV9zD2RqKZ7G9/rj4AAAAAAAAAAAAAAAD8T74DVhZG6MsBqOQAAAAASUVORK5CYII="
            />
            <a href="/">
            <img className="h-8 mx-2"
            alt="youtube-logo"
            src="data:image/png;base64,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"
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
            src="data:image/png;base64,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"
            />
        </div>
    </div>
  )
}

export default Header;