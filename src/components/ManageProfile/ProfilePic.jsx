import { Box } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../Redux/Auth/action';
import { ProfilePic } from '../Auth/ProfilePic'
export const Profilepic = ({ userData }) => {
    const { token } = useSelector(state=>state.authReducer);
    const dispatch = useDispatch();
    const handleChange = (e)=>{
       const formData = new FormData();
       formData.append("file",e.target.files[0]);
       dispatch(updateUser(formData, token))
    }
  return (
    <Box w={['100%', '100%', '100%', 'fit-content']} mt="20px">
      <form action="" onChange={(e)=>handleChange(e)}>
        <ProfilePic
          pic={'https://chatbot-na.herokuapp.com/' + userData?.profile_pic}
        />
      </form>
    </Box>
  )
}
