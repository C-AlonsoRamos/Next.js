import { useContext } from 'react';import { Box, Drawer, List, ListItem, ListItemIcon, Typography, ListItemText, Divider  } from '@mui/material';


import InboxIcon from '@mui/icons-material/Inbox';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';

import { UIContext } from '@/context/ui';

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts']


const Sidebar = () => {


    const {sidemenuOpen, closeSideMenu} = useContext(UIContext)

    


 return (
    

    <Drawer 
    anchor="left"
    open= {sidemenuOpen}
    onClose={ closeSideMenu }
    >

        <Box sx={{ width: 250 }} > 
            
            <Box sx={{ padding: '5px 10px' }} >

                <Typography variant="h4" >Menú</Typography>

            </Box>
            <List>
            {
                menuItems.map((text, index) => (

                    <ListItem button key={ text } >
                        <ListItemIcon>
                            {index % 2 ? <InboxIcon /> : <AttachEmailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={ text } />
                    </ListItem>
                )
                    
                )
            }
            </List>
            
            <Divider />
            <List>
            {
                menuItems.map((text, index) => (

                    <ListItem button key={ text } >
                        <ListItemIcon>
                            {index % 2 ? <InboxIcon /> : <AttachEmailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={ text } />
                    </ListItem>
                )
                    
                )
            }
            </List>
            
        </Box>

            
       

        
    </Drawer>
  )
}

export default Sidebar
