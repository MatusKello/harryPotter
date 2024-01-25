import { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import './NavLink.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <MenuIcon
        sx={{
          '&:hover': {
            cursor: 'pointer',
            color: (theme) => theme.palette.secondary.dark,
          },
        }}
        onClick={toggleDrawer(true)}
      />
      <Drawer anchor='left' open={drawerOpen} onClose={toggleDrawer(false)}>
        <IconButton
          sx={{ background: (theme) => theme.palette.tertiary.light }}
        >
          <CloseIcon
            sx={{
              m: 1,
            }}
            onClick={toggleDrawer(false)}
          />
        </IconButton>
        <List sx={{ background: (theme) => theme.palette.tertiary.light }}>
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
