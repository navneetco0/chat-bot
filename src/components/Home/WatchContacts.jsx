import { Box } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { View } from '../../Assets/svg/View'
import { getContacts, getParticularChat } from '../../Redux/Chat/action'

export const WatchContacts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.authReducer)
  const { contacts } = useSelector((state) => state.chatReducer)
  useEffect(() => {
    dispatch(getContacts({ token }))
  }, [])
  return (
    <Box width={'100%'} mt="70px" h="calc(100vh - 70px)">
      <table style={{backgroundColor:"white", textAlign:'center', margin:'auto'}}>
        <thead>
          <tr>
            <th>id</th>
            <th>Full Name</th>
            <th>Phone</th>
            <th>email</th>
            <th>View chat</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((Element, index) => (
            <tr key={index}>
                <td>{Element._id}</td>
                <td>{Element.first_name} {Element.last_name}</td>
                <td>{Element.phone}</td>
                <td>{Element.email}</td>
                <td onClick={()=>{dispatch(getParticularChat({id:Element._id, token:token}));navigate('/show-chat')}}><View/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  )
}
