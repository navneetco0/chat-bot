import { Box, Flex } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { Profilepic } from '../components/ManageProfile/ProfilePic'
import { ProInfo } from '../components/ManageProfile/ProInfo'
import { EditLanguage } from '../components/ManageProfile/EditLanguage'
import { MngPassword } from '../components/ManageProfile/MngPass'
import { Navbar } from "../components/Home/Navbar"

export const ManageProfile = () => {
  const { userData, token } = useSelector((state) => state.authReducer)
  return (
   <>
     <Navbar/>
     <Flex w={['100%', '80%']} flexDir={['column','column','column', 'row']} m={' 100px auto 0px'} gap="3%" >
      <Profilepic userData={userData} token={token}/>
      <Box borderRadius={'10px'} p="20px" flexGrow={1}>
        {userData&&<ProInfo userData={userData} token={token}/>}
        <br/>
        <EditLanguage token={token}/>
        <br/>
        <MngPassword token={token}/>
      </Box>
    </Flex>
   </>
  )
}
