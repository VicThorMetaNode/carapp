import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input
} from '@chakra-ui/react'



function FormCustom() {
  

  return (
    <FormControl>
  <FormLabel htmlFor='email'></FormLabel>
  <Input id='email' type='email' />
  <FormHelperText> We'll never share your email.</FormHelperText>
    </FormControl>
  )
}

export default FormCustom