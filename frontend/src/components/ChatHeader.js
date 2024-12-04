import { Box, Button, Input, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import SideDrawer from './SideDrawer';

const ChatHeader = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
// const isOpen = false;
// const onClose = false;
    function searchUserHandler () {
        console.log('search clicked');

    }
    
  return (
    <>
    <Box className='chat-header' d="flex"
    justifyContent="space-between"
    alignItems="center"
    bg="white"
    w="100%"
    p="5px 10px 5px 10px"
    borderWidth="5px">
<Button className='search-btn' onClick={onOpen}>
<i className="fas fa-search"></i>
  <Text padding={'5px'}>  Search User </Text>
</Button>
</Box>
<SideDrawer isOpen={isOpen}
onClose={onClose}
/>
</>
  )
}

export default ChatHeader