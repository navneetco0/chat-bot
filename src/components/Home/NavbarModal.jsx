import {
  Box,
  Button,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../../Redux/Auth/action'

export const NavbarModal = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userData } = useSelector(state=>state.authReducer);
  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <Box
          ml="auto"
          w="50px"
          h="50px"
          bg="black"
          borderRadius="50%"
          border={'2px solid #f8f8f8'}
          _hover={{ cursor: 'pointer', border: '2px solid gray' }}
        >
            <img style={{height:"100%", borderRadius:'50%'}} src={"https://chatbot-na.herokuapp.com/"+userData?.profile_pic} alt="" />
        </Box>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverCloseButton />
        <PopoverBody>
        <Text textAlign={'center'} fontSize="30px" _hover={{color:'gray', cursor:'pointer'}} onClick={()=>navigate(`/manage-profile`)}>Manage Profile</Text>
        <Button display={'block'} m="10px auto" colorScheme={'messenger'} onClick={()=>dispatch(logoutUser())}>Log Out</Button>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
