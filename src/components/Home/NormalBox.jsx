import { Box, Button, Flex, Text, useToast } from "@chakra-ui/react"
import { useSelector } from "react-redux"

export const NormalBox=({vis})=>{
  const toast = useToast();
    const { chat } = useSelector((state) => state.chatReducer);
    const handleTost=()=>{
        toast({
          position:'top',
          title: 'Thank you,',
          description: "We'll connect with you shortly.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
    }
    return (
        <Box
        h={vis?"calc(100vh - 70px)":"calc(100vh - 130px)"}
        w={['95%', '90%', '80%', '60%']}
        m={vis?"70px auto 0px":"auto"}
        overflowY="scroll"
      >
        {chat &&
          chat.map((Element, index) => (
            <Box
              bg={index%2!==0?"#3D8361":"white"}
              mb="10px"
              ml={index%2!==0?"auto":""}
              p="10px 20px"
              borderRadius={index%2!==0?"10px 0px 10px 10px":'0px 10px 10px '}
              w="fit-content"
              key={index}
            >
              {
              typeof(Element)==='object'&&Element?.ans?.[0]?.TLDs ?<Box>
                <Text textAlign={'center'} borderBottom="1px solid gray" mb="10px" fontWeight={'500'}>{Element.text}</Text>
                <Text>TLDs: {Element.ans[0].TLDs}</Text>
                <Text>1 year: {Element.ans[0].year}</Text>
                <Text>Renew: {Element.ans[0].Renew}</Text>
                <Text>Transfer: {Element.ans[0].Transfer}</Text>
                {!vis&&<Button colorScheme={'whatsapp'} display="block" m="10px auto" onClick={()=>handleTost()}>Contact Us</Button>}
              </Box>:
              typeof(Element) === 'object' && index % 2 === 0 ? <Box>
                <Text textAlign={'center'} borderBottom="1px solid gray" mb="10px" fontWeight={'500'}>{Element.text}</Text>
               { Element.ans.map((element, i) => (
                  <Flex key={i} gap="10px" flexDir={!element.id?'column':'row'}>
                    <Text>{Element.ans.length>1&&(i + 1 + '.')}</Text>
                    <Text>{element.text}</Text>
                    {!element.id&&!vis&&<Button colorScheme={'whatsapp'} display="block" m="10px auto" onClick={()=>handleTost()}>Contact Us</Button>}
                  </Flex>
                ))}
              </Box> :
              (
                <Box>
                  <Text>{typeof(Element)!=="object"&&Element}</Text>
                  
                </Box>
              )}
            </Box>
          ))}
      </Box>
    )
}