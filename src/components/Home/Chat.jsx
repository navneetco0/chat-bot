import io from 'socket.io-client'
import { NormalBox } from './NormalBox'
import { FormBox } from './FormBox'
import { Flex } from '@chakra-ui/react'
const ENDPOINT = 'https://chatbot-na.herokuapp.com/';
let socket;

export const Chat = () => {
  socket=io(ENDPOINT);
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
