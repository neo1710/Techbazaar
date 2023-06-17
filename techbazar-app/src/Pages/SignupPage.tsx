import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {  useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { Link, useNavigate } from 'react-router-dom';
  import {user} from "../Redux/AuthReducer/reducer"
import { useDispatch } from 'react-redux';
import { adduser } from '../Redux/AuthReducer/api';
export const Signup=()=>{
    const [showPassword, setShowPassword] = useState(false);
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setpassword]=useState("")
    const dispatch=useDispatch()
    const navigate=useNavigate()
    let newUser:user={
      name,
      email,
      password,
    }
    const handleSubmit=()=>{
      dispatch<any>(adduser(newUser));
      navigate("/login")
      setName("")
      setEmail("")
      setpassword("")
    }
    
    return(
        <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack w={"80%"} spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" w={"400px"} onChange={(e)=>setName(e.target.value)} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={(e)=>setEmail(e.target.value)}/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} onChange={(e)=>setpassword(e.target.value)}/>
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'#00472F'}
                  color={'white'}
                  _hover={{
                    bg: 'gray.800',
                  }} onClick={handleSubmit}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link to={"/login"} style={{color:'#00472F',fontWeight:"500"}}>Login</Link><br />
                  <Link to={"/adminlogin"} style={{color:'#00472F',fontWeight:"500"}}>Login as Admin</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    )
}