import { Box } from '@chakra-ui/react';
import React from 'react';
const ChatBox = ()=> {
    return (
        <Box d={ "flex"}
        alignItems="center"
        flexDir="column"
        p={3}
        bg="white"
        w={{ base: "100%", md: "68%" }}
        borderRadius="lg"
        borderWidth="1px">
            chatbox
        </Box>
    )
}
export default ChatBox