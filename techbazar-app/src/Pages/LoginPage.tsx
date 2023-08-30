import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    InputGroup,
    InputRightElement,
    useColorModeValue,
    Text
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { getuser } from '../Redux/AuthReducer/api';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from "react-router-dom";

export const Login=()=>{
    const dispatch=useDispatch()
    const [showPassword, setShowPassword] = useState(false);
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const location=useLocation()
    const userData=useSelector((store:any)=>store.authReducer.userData)
    const navigate=useNavigate()
    console.log(userData);
    console.log(location.state);
    
    const handleSubmit=(e:any)=>{
        e.preventDefault()
        dispatch<any>(getuser)
        if(email && password){
            for(let i=0; i<userData.length; i++){
                if(userData[i].email===email && userData[i].password===password){
                   localStorage.setItem("userName", JSON.stringify(userData[i].name));
                   if(location.state==="/products"){
                    console.log(location.state)
                    navigate("/products")
                   }else if(location.state="/cart"){
                    navigate("/cart")
                   }
                   else{
                    navigate("/")
                   }
                   alert("Login Successfully")
                   break;
                }
                
              }
        }else if (!email && !password){
            alert("Please fill all details");
            
        }
        else{
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
                <Heading fontSize={'4xl'}>Sign in to your account</Heading>
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
                        <Link to={""} style={{color:'#42a6e9'}}>Forgot password?</Link>
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
                    <Stack pt={6}>
                        <Text align={'center'}>
                        Don't Have a Account? <Link to={"/signup"} style={{color:'#00472F',fontWeight:"500"}}>SignUp</Link><br />
                        Already a Admin? <Link to={"/adminlogin"} style={{color:'#00472F',fontWeight:"500"}}>Login as Admin</Link>
                        </Text>
                    </Stack>
                </Stack>
                </Box>
            </Stack>
         </Flex>
    )
}