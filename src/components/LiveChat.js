import { useEffect, useState } from "react"
import ChatMessage from "./ChatMessage"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "../utils/chatSlice";
import { generateRandomNames, makeRandomMessage } from "../utils/helper";


const LiveChat = () => {
    const [LiveMessage,setLiveMessage] = useState("")
    const dispatch = useDispatch();
    const ChatMessages = useSelector(store=>store.chat.messages);
    
    useEffect(()=>{
        const i = setInterval(()=>{


            // APi polling
          dispatch(addMessage({
            name: generateRandomNames(),
            message:makeRandomMessage(20)+"🚀",
          })
        )   

        },1500);
        return () =>{
            clearInterval(i);
        }
    },[]);

  return (
    <>
   
    <div className='w-full h-[450px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        {/* don't use index as key  */}
        <div>
        {ChatMessages.map((c,index)=>
        <ChatMessage 
        key={index}
        name={c.name}
        message= {c.message}
        />)}
        </div>
        </div>
        <form className="w-full p-2 ml-2 border border-black flex" onSubmit={(e)=>{
          e.preventDefault();
          dispatch(addMessage({
            name:"Aneesh Sharma",
            message:LiveMessage,
          }))
          setLiveMessage("")
        }}>
            <input className="px-2 w-96" type="text" value={LiveMessage} onChange={(e)=>{
              setLiveMessage(e.target.value);
            }}/>
            <button className="px-2 mx-2 bg-green-600 rounded-lg">Send</button>
       </form>
      </>
  )
}

export default LiveChat