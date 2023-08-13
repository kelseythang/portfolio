import { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LightIcon from '@mui/icons-material/LightModeOutlined';
import DarkIcon from '@mui/icons-material/DarkModeOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import CustomIconButton from '../../components/CustomIconButton';
import { ColorModeContext, useMode } from '../../contexts/ThemeContext';

const drawerWidth = 240;
const navItems = ['Home', 'Projects', 'Contact'];

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleColorMode } = useContext(ColorModeContext);
  const [theme] = useMode();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      {/* <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
      <IconButton onClick={toggleColorMode} sx={{ mt: 2 }}>
        {theme.palette.mode === 'light' ? (<LightIcon fontSize='small' />) : (<DarkIcon fontSize='small' />)}
      </IconButton>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar 
        component='nav'
        enableColorOnDark
        color='transparent'
        style={{  
          backdropFilter: 'blur(5px)',
          transition: 'background-color 0.3s, backdrop-filter 0.3s',
          boxShadow: 'none'
        }}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Kelsey Thang
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
            {/* {navItems.map((item) => (
              <Button key={item}>
                {item}
              </Button>
            ))} */}
            <IconButton onClick={toggleColorMode} sx={{ ml: 1 }}>
              {theme.palette.mode === 'light' ? (<LightIcon fontSize='small' />) : (<DarkIcon fontSize='small' />)}
            </IconButton>
            <CustomIconButton link='https://github.com/kelseythang' button={<GitHubIcon className='icons' />} />
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}

export default NavBar;