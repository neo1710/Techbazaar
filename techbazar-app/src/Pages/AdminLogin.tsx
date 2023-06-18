import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    InputGroup,
    InputRightElement,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { getuser } from '../Redux/AuthReducer/api';
import { user } from '../Redux/AuthReducer/reducer';
import { useLocation, useNavigate } from "react-router-dom";
export const AdminLogin=()=>{
    const dispatch=useDispatch()
    const [showPassword, setShowPassword] = useState(false);
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const userData=useSelector((store:any)=>store.authReducer.userData)
    const navigate=useNavigate()
    console.log(userData);
    
    const handleSubmit=(e:any)=>{
        e.preventDefault()
        dispatch<any>(getuser)
        if(email==="admin@gmail.com" && password==="admin1234"){
            navigate("/admin");
        }
        else if (!email && !password){
            alert("Please fill all details");
            
        }
        else {
            alert("Wrong Credentials");
        };
    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                <Heading fontSize={'4xl'}>Login to Admin Side</Heading>
                </Stack>
                <Box
                rounded={'lg'}
                bg={useColorModeValue('white', 'gray.700')}
                boxShadow={'lg'}
                p={8}>
                <Stack spacing={4}>
                    <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" onChange={(e)=>setEmail(e.target.value)}/>
                    </FormControl>
                    <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                            <Input type={showPassword ? 'text' : 'password'} onChange={(e)=>setPassword(e.target.value)}/>
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
                    <Stack spacing={10}>
                    <Stack
                        direction={{ base: 'column', sm: 'row' }}
                        align={'start'}
                        justify={'space-between'}>
                        <Checkbox>Remember me</Checkbox>
                        <Link color={'blue.400'}>Forgot password?</Link>
                    </Stack>
                    <Button
                        bg={'#00472F'}
                        color={'white'}
                        _hover={{
                        bg: 'gray.800',
                        }} onClick={handleSubmit}>
                        Sign in
                    </Button>
                    </Stack>
                </Stack>
                </Box>
            </Stack>
         </Flex>
    )
}