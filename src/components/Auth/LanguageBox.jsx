import { useDispatch, useSelector } from "react-redux";
import { Flex, Tag, TagCloseButton, TagLabel } from '@chakra-ui/react'
import { removeLanguage } from '../../Redux/Auth/action'

export const LanguageBox = () => {
  const dispatch = useDispatch()
  const { languages } = useSelector((state) => state.authReducer);
  return (
    <Flex overflowX="scroll" gap="5px">
      {languages.map((Element, index) => (
        <Tag
          size={'md'}
          key={index}
          borderRadius="full"
          variant="solid"
          colorScheme="messenger"
        >
          <TagLabel whiteSpace={'nowrap'}>{Element}</TagLabel>
          <TagCloseButton onClick={() => dispatch(removeLanguage(Element))} />
        </Tag>
      ))}
    </Flex>
  )
}
