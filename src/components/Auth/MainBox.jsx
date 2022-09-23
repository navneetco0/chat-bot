import { Flex, useToast, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser, registerUser } from '../../Redux/Auth/action'

export const MainBox = ({ children, title }) => {
  const navigate = useNavigate();
  const toast = useToast()
  const dispatch = useDispatch()
  const { languages, token } = useSelector((state) => state.authReducer);
  if(token) navigate('/')

  const [form, setForm] = useState({})

  const handleForm = (event) => {
    if (event.target.id === 'profile_pic')
      setForm({ ...form, [event.target.id]: event.target.files[0] })
    else setForm({ ...form, [event.target.id]: event.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(title==='Login') dispatch(loginUser(form));
    else if (form.password === form.confirm_password)
      dispatch(registerUser(form, languages))
    else
      toast({
        position: 'top',
        title: "password didn't match",
        status: 'error',
        isClosable: true,
      })
  }
  return (
    <Flex
      w={['100%', '80%', '60%', '50%']}
      padding={['20px']}
      border={['0px', '1px solid rgba(127, 127, 127, 0.5)']}
      borderRadius="10px"
    >
      <form
        action=""
        onChange={handleForm}
        style={{ width: '100%', height: 'fit-content' }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <Text fontSize="30px">{title==="Login"?"Login":"Register"} here</Text>
        {children}
        <Flex>{title==="Login"?"Don't have any account?":"Already have an account?"} <Text color="blue"  _hover={{color:'green', cursor:'pointer'}} _active={{color:'red'}} onClick={()=>title==='Login'?navigate('/register'):navigate('/login')}> {title==="Login"?"Register here":"Login here"}</Text></Flex>
        <input
          type={'submit'}
          value={title}
          style={{
            display: 'block',
            margin: 'auto',
            backgroundColor: '#2424ff',
            color: 'white',
            borderRadius: '6px',
            padding: '5px 20px',
          }}
        />
      </form>
    </Flex>
  )
}
