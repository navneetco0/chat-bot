import { Box, Flex, Input } from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setChat } from '../../Redux/Chat/action'

export const FormBox = ({ socket }) => {
  const dispatch = useDispatch()
  const { userData} = useSelector((state)=>state.authReducer);
  const { chat } = useSelector((state) => state.chatReducer)
  const [option, setOption] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (typeof option === 'string' && option.toLowerCase() === 'menu') {
      socket.emit('responce me', {option, chatId:'63318232de6272d98904af80', id:userData.id})
      socket.on('63318232de6272d98904af80', (data) => dispatch(setChat(data)));
    } else {
      let chatId =
        chat[chat.length - 1]?.ans[option - 1]?.id || '93318232de6272d98904af80'
      socket.emit('responce me', {option,chatId, id:userData.id})
      socket.on(chatId, (data) => dispatch(setChat(data)));
      // dispatch(postChat({input:option, id:chatId, token:token}))
    }
    setOption('')
  }
  return (
    <Box w={['95%', '90%', '80%', '60%']} m={'0px auto 20px'}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Flex gap="2%">
          <Input
            value={option}
            bg="white"
            onChange={(e) => {
              setOption(e.target.value)
            }}
          />
          <input
            type="submit"
            value="Send"
            style={{
              width: '100px',
              borderRadius: '7px',
              background: '#22c35e',
              color: 'white',
            }}
          />
        </Flex>
      </form>
    </Box>
  )
}
