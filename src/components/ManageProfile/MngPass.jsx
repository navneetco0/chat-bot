import { Box, Flex, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Key } from '../../Assets/svg/Key'
import { updateUser } from '../../Redux/Auth/action'
import { BTN } from '../Auth/BTN'
import { LabelInput } from '../Auth/LabelInput'

export const MngPassword = () => {
  const {token} = useSelector(state=>state.authReducer);
  const dispatch = useDispatch();
  const [form, setForm] = useState({})
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {mng_password:form};
    dispatch(updateUser(data, token))
  }
  return (
    <form
      style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        flexGrow: '1',
      }}
      onChange={(e) => handleChange(e)}
      onSubmit={(e) => handleSubmit(e)}
    >
      <Text fontSize="45px" mb="20px">
        Change Password
      </Text>
      <Box>
        <Flex
          gap="20px"
          flexDir={['column', 'column', 'row']}
          width={'100%'}
          justifyContent="space-evenly"
        >
          <LabelInput
            Icon={<Key />}
            label={'current_password'}
            type="password"
          />
          <LabelInput Icon={<Key />} label={'new_password'} type="password" />
        </Flex>
        <br />
        <BTN title="Save" />
        <Text textAlign={'right'} color="blue">
          forgot password
        </Text>
      </Box>
    </form>
  )
}
