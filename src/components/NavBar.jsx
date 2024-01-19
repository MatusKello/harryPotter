import { useState } from 'react';
import { Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './NavLink.css';

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <Button variant='contained' onClick={toggleDrawer(true)}>
        Open menu
      </Button>
      <Drawer anchor='left' open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem
            Button
            component={NavLink}
            to='/'
            onClick={toggleDrawer(false)}
            className='linkStyle'
          >
            <ListItemText primary='Main page' />
          </ListItem>
          <ListItem
            Button
            component={NavLink}
            to='/hogwarts-students'
            onClick={toggleDrawer(false)}
            className='linkStyle'
          >
            <ListItemText primary='Hogwarts students' />
          </ListItem>
          <ListItem
            Button
            component={NavLink}
            to='/hogwarts-teachers'
            onClick={toggleDrawer(false)}
            className='linkStyle'
          >
            <ListItemText primary='Hogwarts teachers' />
          </ListItem>
          <ListItem
            Button
            component={NavLink}
            to='/hogwarts-houses'
            onClick={toggleDrawer(false)}
            className='linkStyle'
          >
            <ListItemText primary='Hogwarts houses' />
          </ListItem>
          <ListItem
            Button
            component={NavLink}
            to='/all-spells'
            onClick={toggleDrawer(false)}
            className='linkStyle'
          >
            <ListItemText primary='All spells' />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default NavBar;
