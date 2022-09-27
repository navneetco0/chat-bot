import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import { Send } from '../../Assets/svg/Send'
import io from 'socket.io-client'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setChat } from '../../Redux/Chat/action'
const socket = io.connect('http://localhost:5000')

export const Chat = () => {
  const dispatch = useDispatch()
  const { chat } = useSelector((state) => state.chatReducer)
  const [option, setOption] = useState('')
  useEffect(() => {
    socket.on('welcome', (data) => {
      dispatch(setChat(data))
    })
    return () => {
      socket.off('welcome')
    }
  }, [])
  return (
    <Flex
      w="100%"
      flexDir={'column'}
      mt="70px"
      minH="calc(100vh - 70px)"
      justifyContent={'space-between'}
    >
      <Box
        h="calc(100vh - 130px)"
        w={['95%', '90%', '80%', '60%']}
        m="auto"
        overflowY="scroll"
      >
        {chat &&
          chat.map((Element, index) => (
            <Box
              bg={index%2!==0?"#3D8361":"white"}
              mb="10px"
              ml={index%2!==0?"auto":""}
              p="10px 20px"
              borderRadius={'20px'}
              w="fit-content"
              key={index}
            >
              {
              typeof(Element)==='object'&&Element?.ans?.[0]?.TLDs ?<Box>
                <Text>TLDs: {Element.ans[0].TLDs}</Text>
                <Text>1 year: {Element.ans[0].year}</Text>
                <Text>Renew: {Element.ans[0].Renew}</Text>
                <Text>Transfer: {Element.ans[0].Transfer}</Text>
                <Button colorScheme={'whatsapp'} display="block" m="10px auto">Contact Us</Button>
              </Box>:
              typeof(Element) === 'object' && index % 2 === 0 ? (
                Element.ans.map((element, i) => (
                  <Flex key={i} gap="10px" flexDir={!element.id?'column':'row'}>
                    <Text>{Element.ans.length>1&&(i + 1 + '.')}</Text>
                    <Text>{element.text}</Text>
                    {!element.id&&<Button colorScheme={'whatsapp'} display="block" m="10px auto">Contact Us</Button>}
                  </Flex>
                ))
              ) :
              (
                <Text>{typeof(Element)!=="object"&&Element}</Text>
              )}
            </Box>
          ))}
      </Box>
      <Box w={['95%', '90%', '80%', '60%']} m={'0px auto 20px'}>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            dispatch(setChat(option))
            if(typeof(option)==='string'&&option.toLowerCase()==='menu')
              dispatch(setChat(chat[0]));
            else{
            let chatId =
              chat[chat.length - 1]?.ans[option - 1]?.id ||
              '93318232de6272d98904af80'
              socket.emit('responce me', chatId)
            socket.on(chatId, (data) => dispatch(setChat(data)))
            }
            setOption('')
          }}
        >
          <Flex gap="2%">
            <Input
              value={option}
              bg="white"
              onChange={(e) => {
                setOption(e.target.value)
              }}
            />
            <Button colorScheme={'whatsapp'}>
              <Box w="40px" color="white">
                <Send />
              </Box>
            </Button>
          </Flex>
        </form>
      </Box>
    </Flex>
  )
}
