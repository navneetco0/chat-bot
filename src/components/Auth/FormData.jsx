import { GridItem, Text } from '@chakra-ui/react'
import { LabelInput } from './LabelInput'
import { LabelSelect } from './LabelSelect'
import { ProfilePic } from './ProfilePic'
import { Call } from '../../Assets/svg/Call'
import { Email } from '../../Assets/svg/Email'
import { Key } from '../../Assets/svg/Key'
import { Languages } from '../../Assets/svg/Languages'
import { Gender } from '../../Assets/svg/Gender'
import { DOB } from '../../Assets/svg/DOB'
import { GridBox } from './GridBox'
import { LanguageBox } from './LanguageBox'

export const FormData = () => {
  const lan = [ 'select language', 'Hindi', 'English', 'Tamil', 'Bangla', 'Kannada', 'Malyalam', 'Telugu', 'Urdu',
]
  return (
    <>
      <ProfilePic />
      <Text fontSize={'30px'} textAlign="center">
        Select Profile Picture
      </Text>
      <GridBox>
        <LabelInput label={'first_name'} type="text" />
        <LabelInput label={'last_name'} type="text" />
        <LabelInput label={'phone'} type={'number'} Icon={<Call />} />
        <LabelInput label={'email'} type={'email'} Icon={<Email />} />
        <LabelInput label={'password'} type={'password'} Icon={<Key />} />
        <LabelInput label={'confirm_password'} type={'password'} Icon={<Key />} again={'Re-enter your password here...'} />
        <LabelInput label={'dob'} type={'date'} Icon={<DOB />} />
        <LabelSelect label={'gender'} options={['Male', 'Female', 'Other']} Icon={<Gender />} />
        <GridItem colSpan={[1,2]}>
          <LanguageBox/>
          <LabelSelect label={'languages'} options={lan} Icon={<Languages />} />
        </GridItem>
      </GridBox>
    </>
  )
}
