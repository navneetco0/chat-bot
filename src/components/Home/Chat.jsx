import io from 'socket.io-client'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setChat } from '../../Redux/Chat/action'
import { NormalBox } from './NormalBox'
import { FormBox } from './FormBox'
import { Flex } from '@chakra-ui/react'
const socket = io.connect('http://localhost:5000')

export const Chat = () => {
  const dispatch = useDispatch();
  const {userData} = useSelector(state=>state.authReducer);
  useEffect(() => {
    // console.log(userData&&userData)
    // socket.emit('welcome', (userData._id));
    // return () => {
    //   socket.off('welcome')
    // }
  }, [])
  return (
    <Flex
      w="100%"
      flexDir={'column'}
      mt="70px"
      minH="calc(100vh - 70px)"
      justifyContent={'space-between'}
    >
      <NormalBox/>
      <FormBox socket={socket}/>
    </Flex>
  )
}
