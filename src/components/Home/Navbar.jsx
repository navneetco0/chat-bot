import { Box, Flex, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { NavbarModal } from './NavbarModal'
import "./navbar.css"

export const Navbar = () => {
  const navigate = useNavigate()
  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      w="100%"
      p="10px 5%"
      bg="#f8f8f8"
      boxShadow={'rgba(0,0,0, 0.5) 0px 2px 2px 0px'}
      zIndex="3"
    >
      <div className="boxes">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <Box>
        <Text
          fontSize="30px"
          fontWeight={500}
          cursor="pointer"
          onClick={() => navigate('/')}
          color="white"
        >
          IGT
        </Text>
      </Box>
      <NavbarModal />
    </Flex>
  )
}
