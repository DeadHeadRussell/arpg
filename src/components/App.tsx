'use client';

import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import {useTheme} from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useState} from 'react';

import Menu from './Menu';

const menuWidth = 240;

export const App = ({children}) => {
  const theme = useTheme();

  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const floatingMenu = useMediaQuery(theme.breakpoints.down('md'));

  function toggleDrawer() {
    setDrawerOpen(!isDrawerOpen);
  }

  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline />
      <AppBar position='fixed' sx={{zIndex: theme => theme.zIndex.drawer + 1}}>
        <Toolbar>
          <IconButton color='inherit' aria-label='open menu' edge='start' onClick={toggleDrawer} sx={{mr: 2, display: {md: 'none'}}}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h5' noWrap component='div'>ARPG</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        open={!floatingMenu || isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
        variant={floatingMenu ? 'temporary' : 'permanent'}
        sx={{
          width: menuWidth,
          flexShrink: 0,
          ['& .MuiDrawer-paper']: {
            width: menuWidth,
            boxSizing: 'border-box',
            background: theme.palette.secondary.main
          }
        }}
      >
        <Toolbar />
        <Box sx={{overflow: 'auto'}}>
          <Menu />
        </Box>
      </Drawer>
      <Box component='main' sx={{flexGrow: 1, p: 3}}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

