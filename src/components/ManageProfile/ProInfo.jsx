import { Call } from '../../Assets/svg/Call'
import { DOB } from '../../Assets/svg/DOB'
import { Flex, Text } from '@chakra-ui/react'
import { EditBox } from './EditBox'
import { useState } from 'react'
import { BTN } from '../Auth/BTN'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../Redux/Auth/action'

export const ProInfo = () => {
  const dispatch = useDispatch();
  const {userData, token} = useSelector(state=>state.authReducer)
    const [form, setForm] = useState({});
    const handleSubmit = (e)=>{
      e.preventDefault();
      const data = {data:form};
      dispatch(updateUser(data, token));
    }
  return (
    <>
      {userData && (
        <form
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
          }}
          onChange={(e) => setForm({ ...form, [e.target.id]: e.target.value })}
          onSubmit = {(e)=>handleSubmit(e)}
        >
          <Text fontSize="45px" mb="20px">
            Profile Information
          </Text>
          <Flex flexDir={'column'} gap="10px">
            <Flex w="100%" flexDir={['column', 'row']} gap="10px">
              <EditBox
                label={'first_name'}
                data={userData.first_name}
              />
              <EditBox
                label={'last_name'}
                data={userData.last_name}
              />
            </Flex>
            <EditBox
              Icon={<DOB />}
              label={'dob'}
              data={userData.dob}
              type="date"
            />
            <EditBox
              Icon={<Call />}
              label={'Phone'}
              data={userData.phone}
            />
          </Flex>
          <br />
          <BTN title={'Save'} />
        </form>
      )}
    </>
  )
}
