import React, { useState } from 'react';
import { AppBar, Typography, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <AppBar position="static" color="transparent" style={{ padding: '20px 30px' }}>
      <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography component={Link} to="/" variant="h5" style={{ flexGrow: 1 }} sx={{ fontWeight: "bold", textDecoration: "none", color:"inherit" }} >
          Foundation
        </Typography>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleDrawer}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            gap: 3,
            justifyContent: 'space-between'
          }}
        >
          <Box>
            <Button color="inherit" component={Link} to="/work">Work</Button>
            <Button color="inherit" component={Link} to="/services">Services</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
          </Box>
          <Button color="inherit" component={Link} to="/hire-us" sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>
            Hire us →
          </Button>
        </Box>
      </Toolbar>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <List>
          <ListItem button component={Link} to="/" onClick={toggleDrawer}>
            <ListItemText primary="Work" />
          </ListItem>
          <ListItem button component={Link} to="/services" onClick={toggleDrawer}>
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem button component={Link} to="/about" onClick={toggleDrawer}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button component={Link} to="/hire-us" onClick={toggleDrawer}>
            <ListItemText primary="Hire us →" />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
