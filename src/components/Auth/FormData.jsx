import {
  Flex,
  Grid,
  GridItem,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
} from '@chakra-ui/react'
import { LabelInput } from './LabelInput'
import { LabelSelect } from './LabelSelect'
import { ProfilePic } from './ProfilePic'
import { Call } from '../../Assets/svg/Call'
import { Email } from '../../Assets/svg/Email'
import { Key } from '../../Assets/svg/Key'
import { Languages } from '../../Assets/svg/Languages'
import { Gender } from '../../Assets/svg/Gender'
import { DOB } from '../../Assets/svg/DOB'
import { useDispatch, useSelector } from 'react-redux'
import { removeLanguage } from '../../Redux/Auth/action'

export const FormData = () => {
  const dispatch = useDispatch()
  const { languages } = useSelector((state) => state.authReducer)
  return (
    <>
      <Text fontSize="30px">Register here</Text>
      <ProfilePic />
      <Text fontSize={'30px'} textAlign="center">
        Select Profile Picture
      </Text>
      <Grid
        templateColumns={['repeat(1, 100%)', 'repeat(2, 49%)']}
        templateRows={['repeat(9, 1fr)', 'repeat(5, 1fr)']}
        gap="2%"
        m="10px 0px"
        w="100%"
        h="fit-content"
        pb={["70px","30px"]}
      >
        <LabelInput label={'first_name'} type="text" />
        <LabelInput label={'last_name'} type="text" />
        <LabelInput label={'phone'} type={'number'} Icon={<Call />} />
        <LabelInput label={'email'} type={'email'} Icon={<Email />} />
        <LabelInput label={'password'} type={'password'} Icon={<Key />} />
        <LabelInput
          label={'confirm_password'}
          type={'password'}
          Icon={<Key />}
          again={'Re-enter your password here...'}
        />
        <LabelInput label={'dob'} type={'date'} Icon={<DOB />} />
        <LabelSelect
          label={'gender'}
          options={['Male', 'Female', 'Other']}
          Icon={<Gender />}
        />
        <GridItem colSpan={[1,2]}>
                <Flex overflowX="scroll" gap="5px">
                {languages.map((Element, index) => (
                    <Tag
                    size={'md'}
                    key={index}
                    borderRadius="full"
                    variant="solid"
                    colorScheme="messenger"
                    >
                    <TagLabel whiteSpace={'nowrap'}>{Element}</TagLabel>
                    <TagCloseButton
                        onClick={() => dispatch(removeLanguage(Element))}
                    />
                    </Tag>
                ))}
                </Flex>
                <LabelSelect
                label={'languages'}
                options={[
                    'select language',
                    'Hindi',
                    'English',
                    'Tamil',
                    'Bangla',
                    'Kannada',
                    'Malyalam',
                    'Telugu',
                    'Urdu',
                ]}
                Icon={<Languages />}
                />
        </GridItem>
      </Grid>
    </>
  )
}
