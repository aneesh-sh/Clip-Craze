import { USER_ICON } from "../utils/constant"


const ChatMessage = ({name,message}) => {
  return (
    <div className="flex items-center shadow-sm ">
        <img className="h-8"
            alt="user-icon"
            src={USER_ICON}
            />
            <span className="py-2 font-bold">{name}</span>
            <span>{message}</span>
           
    </div>
  )
}

export default ChatMessage