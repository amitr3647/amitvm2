import { Button, FormControl, FormHelperText, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {

    const [show, setShow] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const submitHandler = async ()=>{
        const config = {
         headers: {
            "Content-type": "application/json",
         } 
        };
        try{
            const data = await axios.post('/api/user/login', {
                email,password
            },config);
            navigate('/chats');
            
        }catch(err){
console.log('err',err);
toast.warn(err.message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    
    // transition: Bounce,
    
})
        }
    
   
//     .then(res=> {
//     console.log('res',res);
//     navigate('/chats')
// }
// )

    }
    function handleClick(){
setShow(!show);
    }

    function getGuestCredHandler () {
        setEmail('guest123@gmail.com');
        setPassword('1234567890');
        
    }
  return (
   <VStack>
    <FormControl isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input placeholder='Enter your email' 
        value={email}
        onChange={(e)=> {setEmail(e.target.value)}} ></Input>
    </FormControl>
    <FormControl isRequired>
        <FormLabel >Password</FormLabel>
        <InputGroup size="md">
        <Input type={show?'password': 'text'} 
        value={password}
        onChange={(e)=> {
            setPassword(e.target.value)
        }}/>
        
        <InputRightElement width="4.5rem">
        <Button width='100%' onClick={handleClick}>{show?'Show': 'Hide'}</Button>
        </InputRightElement>
        </InputGroup>
    </FormControl>
    <Button colorScheme='blue' variant='solid' className='btn login' mt='15px' width="100%" onClick={submitHandler}>Login</Button>
    <Button colorScheme='red' variant='solid' className='btn' width="100%"
    onClick={getGuestCredHandler}
    >Get Guest User Credentials</Button>
    <ToastContainer/>
   </VStack>
  )
}

export default Login