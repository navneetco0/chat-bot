import { LabelSelect } from '../Auth/LabelSelect'
import { lan } from '../Auth/lan'
import { LanguageBox } from '../Auth/LanguageBox'
import { Languages } from '../../Assets/svg/Languages'
import {BTN} from "../Auth/BTN"
import { Text } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../Redux/Auth/action'

export const EditLanguage = () => {
  const {languages, token} = useSelector(state=>state.authReducer);
  const dispatch = useDispatch();
  const handleSubmit = (e)=>{
    e.preventDefault();
    const data = {languages:[languages.join(',')]}
    dispatch(updateUser(data, token))
  }
  return (
    <form
      style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
      }}
      onSubmit = {(e)=>handleSubmit(e)}
    >
      <Text fontSize="45px" mb="20px">
        Edit Languages
      </Text>
      <LanguageBox />
      <LabelSelect label={'languages'} options={lan} Icon={<Languages />} />
      <br />
      <BTN title={'Save'} />
    </form>
  )
}
