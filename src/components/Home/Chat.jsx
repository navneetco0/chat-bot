import io from 'socket.io-client'
import { NormalBox } from './NormalBox'
import { FormBox } from './FormBox'
import { Flex } from '@chakra-ui/react'
const socket = io.connect('https://chatbot-na.herokuapp.com')

export const Chat = () => {
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
