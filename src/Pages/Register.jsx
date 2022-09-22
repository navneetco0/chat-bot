import { Flex, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormData } from '../components/Auth/FormData'
import { registerUser } from '../Redux/Auth/action'

export const Register = () => {
  const toast = useToast()
  const dispatch = useDispatch()
  const { languages } = useSelector((state) => state.authReducer)
  const [form, setForm] = useState({
    profile_pic: '',
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    password: '',
    dob: '',
    gender: 'Male',
  })
  console.log(form)
  const handleForm = (event) => {
    if (event.target.id === 'profile_pic')
      setForm({ ...form, [event.target.id]: event.target.files[0] })
    else setForm({ ...form, [event.target.id]: event.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (form.password === form.confirm_password)
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
        <FormData />
        <input
          type={'submit'}
          value="Sign Up"
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
