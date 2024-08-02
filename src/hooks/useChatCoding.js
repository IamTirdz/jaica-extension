import { useContext } from 'react'
import { ChatCodingContext } from 'contexts/ChatCodingContext'

const useChatCoding = () => {
    return useContext(ChatCodingContext);
}

export default useChatCoding;
