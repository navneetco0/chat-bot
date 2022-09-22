import { Box, Center, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setLanguages } from '../../Redux/Auth/action'

export const LabelSelect = ({ label, options, Icon }) => {
  const dispatch = useDispatch();
  const [Focus, setFocus] = useState(false);
  
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
      <Center width={'fit-content'} gap="5px">
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
      <select required name="" id={label}  onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)} style={{outline:"0px", marginLeft:"20px"}} onChange={(e)=>{if(label==='languages'&&e.target.value!=='select language')dispatch(setLanguages(e.target.value))}}>
        {options&&options.map((Element, index)=><option key={index}  value={Element}>{Element}</option>)}
      </select>
    </Flex>
  )
}
