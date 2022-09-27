import { Box, Flex, Input, Text } from "@chakra-ui/react"
import { useState } from "react"
import { Pencil } from "../../Assets/svg/Pencil"

export const EditBox = ({label, type, data}) => {
  const [edit, setEdit] = useState(false)
  return (
    <Flex w="100%" gap="5px" flexDir={'column'}>
      <Text fontWeight={'600'} whiteSpace="nowrap">{label
            .split('_')
            .map(
              (Element) => Element.charAt(0).toUpperCase() + Element.slice(1),
            )
            .join(' ')}</Text>
        {edit? <Input id={label} type={type} placeholder={data}/>:<Flex gap="20px" alignItems={'center'}>
          <Box w={'16px'} onClick={()=>setEdit(true)}><Pencil/></Box> <Text>{data}</Text> 
        </Flex>}
    </Flex>
  )
}
