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
    RadioGroup,
    Radio,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Swal from 'sweetalert2'  
import { useNavigate } from 'react-router-dom';
  export default function Checkout() {
    const navigate=useNavigate()
    const [name,setName]=useState("")
    const [Lname,setLName]=useState("")
    const [address,setaddress]=useState("")
    const [pincode,setpincode]=useState("")
    const [city,setCity]=useState("")
    const [country,setCountry]=useState("")
    const [Cnumber,setCnumber]=useState("")
    const [Cname,setCname]=useState("")
    const [Edate,setEdate]=useState("")
    const [Eyear,setEyear]=useState("")
    const [CVV,setCVV]=useState("")
    
  const handleOrder=(e:any)=>{
    e.preventDefault()
    if(name==""||Lname==""||address==""||pincode==""||city==""||country==""||Cnumber==""||Cname==""||Edate==""||Eyear==""||CVV===""){
        alert("Please Enter the Details")
    }else{
        let obj={
            name:name,
            Lname:Lname,
            address:address,
            pincode:pincode,
            city:city,
            country:country,
            Cnumber:Cnumber,
            Cname:Cname,
            Edate:Edate,
            Eyear:Eyear,
            CVV:CVV
        }
        localStorage.setItem("OrderDetails", JSON.stringify(obj));
        Swal.fire(
            'Successfull!',
            'Your Order placed Successfully!',
            'success'
          )
          setTimeout(()=>{
            navigate("/")
          },2000)
    }    
  }
    return (<div>
        <Navbar/>
        <Stack w={"50%"} spacing={8} mx={'auto'} maxW={'xxl'} py={12} px={6} mt={10}>
          <Stack align={'start'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Your Details
            </Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={6}>
            <Heading fontSize={'2xl'} textAlign={'start'}>
                Shipping Information
            </Heading>
            <Stack spacing={4} mt={5}>
              <HStack>
                <Box>
                  <FormControl id="firstName" >
                    <FormLabel>First Name</FormLabel>
                    <Input w={"324px"} type="text" placeholder='FirstName' onChange={(e)=>setName(e.target.value)} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" w={"324px"} placeholder='LastName' onChange={(e)=>setLName(e.target.value)} />
                  </FormControl>
                </Box>
              </HStack>
              <HStack>
                <Box>
                  <FormControl id="firstName" >
                    <FormLabel>Address</FormLabel>
                    <Input w={"448px"} type="text" placeholder='Address' onChange={(e)=>setaddress(e.target.value)} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Pincode</FormLabel>
                    <Input type="number" w={"200px"} placeholder='Pincode' onChange={(e)=>setpincode(e.target.value)} />
                  </FormControl>
                </Box>
              </HStack>
              <HStack>
                <Box>
                  <FormControl id="firstName" >
                    <FormLabel>City</FormLabel>
                    <Input type="text" w={"324px"} placeholder='City' onChange={(e)=>setCity(e.target.value)} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Country</FormLabel>
                    <Input type="text" w={"324px"} placeholder='Country' onChange={(e)=>setCountry(e.target.value)}/>
                  </FormControl>
                </Box>
              </HStack>
            <Heading fontSize={'2xl'} textAlign={'start'} mt={10}>
                Payment Information
            </Heading>
            <RadioGroup >
                <Stack direction='row'>
                    <Radio value='1' >Credit Card</Radio>
                    <Radio value='2' >Debit card</Radio>
                </Stack>
            </RadioGroup>
            <Stack spacing={4} mt={5}>
              <HStack>
                <Box>
                  <FormControl id="firstName" >
                    <FormLabel>Card Number</FormLabel>
                    <Input w={"324px"} type="number" placeholder='Card Number' onChange={(e)=>setCnumber(e.target.value)} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Name on card</FormLabel>
                    <Input type="text" w={"324px"} placeholder='Card Name' onChange={(e)=>setCname(e.target.value)} />
                  </FormControl>
                </Box>
              </HStack>
              <HStack>
                <Box>
                  <FormControl id="firstName" >
                    <FormLabel>Expiry date</FormLabel>
                    <Input w={"200px"} type="number" placeholder='Expiry date' onChange={(e)=>setEdate(e.target.value)} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="firstName" >
                    <FormLabel>Expiry Year</FormLabel>
                    <Input w={"200px"} type="number" placeholder='Expiry Year' onChange={(e)=>setEyear(e.target.value)} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>CVV/CVC</FormLabel>
                    <Input type="number" w={"242px"} placeholder='CVV/CVC' onChange={(e)=>setCVV(e.target.value)} />
                  </FormControl>
                </Box>
              </HStack>
            </Stack>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'#00472F'}
                  color={'white'}
                  _hover={{
                    bg: '#00472F',
                  }} onClick={handleOrder}>
                  Place Your Order
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
        <Footer/>
    </div>
        
    );
  }