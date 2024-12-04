import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, useDisclosure,  } from '@chakra-ui/react'
import React from 'react'
import { UserCard } from './UserCard'

const SideDrawer = (props) => {
    // const { isOpen, onOpen, onClose } = useDisclosure()
    
    const searchInputHandler = (e)=> {
e.preventDefault();
console.log('iinput',e.target.value);

    }
  return (
    <Box className='side-drawer'>
 <Drawer
        isOpen={props.isOpen}
        placement='left'
        onClose={props.onClose}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <div>Search Users</div>

            <Input mt={'15px'}
             placeholder='Search by name or email'
             onChange={searchInputHandler}
             />
            </DrawerHeader>
          <DrawerBody>
            <UserCard/>
          </DrawerBody>

          
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default SideDrawer