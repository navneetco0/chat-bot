import { Box, Center, Flex } from '@chakra-ui/react'
import { useState } from 'react'

export const LabelInput = ({ label, type, Icon, again }) => {
  const [Focus, setFocus] = useState(false)
  return (
    <Flex
      border="1px solid rgba(127, 127, 127, 0.4)"
      borderRadius="10px"
      boxShadow={
        Focus
          ? 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, #89cffd5f 0px 0px 0px 1px inset'
          : '10px 10px 10px rgba(0, 0, 0, 0)'
      }
      flexDir="column"
      p="2px 10px"
    >
      <Center width={'fit-content'} gap='5px'>
        <Box w="15px">{Icon}</Box>
        <label htmlFor="">
          {label
            .split('_')
            .map(
              (Element) => Element.charAt(0).toUpperCase() + Element.slice(1),
            )
            .join(' ')}
        </label>
      </Center>
      <input
      required
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          marginLeft: '10px',
          outline: 'transparent',
          border: 'transparent',
          padding: '0px 10px',
        }}
        id={label}
        type={type}
        placeholder={again?again:`Enter your ${label
          .split('_')
          .map((Element) => Element.charAt(0).toUpperCase() + Element.slice(1))
          .join(' ')} here...`}
      />
    </Flex>
  )
}
