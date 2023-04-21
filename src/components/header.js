import * as React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';


import { useNavigate } from "react-router-dom";

function Header() {
    const styles = {
        root: {
        flexGrow: 1,
        },
        menuButton: {
        marginRight: 16,
        },
        title: {
        flexGrow: 1,
        }, 
        appBar: {
            backgroundColor: 'black',
        },
    };
  
    const navigate = useNavigate();
    const weapons = () => {
        navigate("weapons");
    }
    const profile = () => {
        navigate("profile");
    }
    const gear = () => {
        navigate("gear");
    }
    const tacticals = () => {
        navigate("tacticals");
    }
    const home = () => {
        navigate("home");
    }

  return (
    <AppBar position="static" style={styles.appBar}>
      <Toolbar>
        <IconButton onClick={home} edge="start" style={styles.menuButton} color="inherit" aria-label="menu">
          {/* Insert your icon component here */}
        </IconButton>
        <Typography onClick={home} variant="h6" style={styles.title}>
          Loadout
        </Typography>
        <Button onClick={profile} color="inherit">Profile</Button>
        <Button onClick={gear} color="inherit">Gear</Button>
        <Button onClick={weapons} color="inherit">Weapons</Button>
        <Button onClick={tacticals} color="inherit">Tacticals</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
