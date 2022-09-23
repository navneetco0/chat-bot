import { Email } from '../Assets/svg/Email'
import { Key } from '../Assets/svg/Key'
import { GridBox } from '../components/Auth/GridBox'
import { LabelInput } from '../components/Auth/LabelInput'
import { MainBox } from '../components/Auth/MainBox'

export const Login = () => {
  return (
    <MainBox title="Login">
      <GridBox>
        <LabelInput label={'email'} type="email" Icon={<Email />} />
        <LabelInput label={'password'} type="password" Icon={<Key />} />
      </GridBox>
    </MainBox>
  )
}
