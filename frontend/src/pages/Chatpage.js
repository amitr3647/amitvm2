import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import SideDrawer from '../components/SideDrawer';
import ChatList from '../components/ChatList';
import ChatBox from '../components/ChatBox';
import ChatHeader from '../components/ChatHeader';

const Chatpage = () => {
    const [chats,setChats] = useState([]);

    useEffect(()=> {
fetchChats();
    },[])

    async function  fetchChats() {
        console.log('fetching chats');
        const response = await fetch('/api/chat');
        // const chats = ;
        setChats(await response.json());
    }
  return (
    <div className='chatPage'd="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
 <ChatHeader></ChatHeader>
    {/* <SideDrawer/> */}
  <Box w={'100%'} h={'90%'} display={'flex'}>
    <ChatList></ChatList>
    <ChatBox></ChatBox>
  </Box>
      
    </div>
    
  )
}

export default Chatpage