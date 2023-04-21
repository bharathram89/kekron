import React from 'react';
import { 
  Box, 
  Typography, 
  AppBar, 
  Toolbar, 
  IconButton, 
  Button, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Badge, 
  Divider 
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AttachMoney, CompareArrows, ExpandMore, Settings } from '@mui/icons-material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#a3a3a3',
    },
  },
});

const useStyles = {
  root: {
    flexGrow: 1,
    padding: '20px',
  },
  appbar: {
    background: '#141414',
    boxShadow: 'none',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuButton: {
    marginRight: '16px',
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
    color: '#fff',
  },
  button: {
    fontWeight: 'bold',
    color: '#fff',
  },
  card: {
    height: '470px',
    borderRadius: '16px',
    background: '#202020',
    color: '#fff',
  },
  media: {
    height: '250px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  content: {
    textAlign: 'center',
    paddingTop: '20px',
    paddingBottom: '20px',
  },
  badge: {
    backgroundColor: '#4db6ac',
    color: '#fff',
    fontWeight: 'bold',
    marginRight: '8px',
  },
  divider: {
    background: '#333',
    height: '2px',
    marginTop: '16px',
    marginBottom: '16px',
  },
  grid: {
    paddingTop: '40px',
  },
  box: {
    paddingTop: '20px',
    paddingBottom: '20px',
    paddingLeft: '40px',
    paddingRight: '40px',
  },
  icon: {
    marginRight: '8px',
  },
};

function Loadout() {
  const classes = useStyles;
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <Settings />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Loadout
            </Typography>
            <Button color="inherit" className={classes.button}>Create a Class</Button>
          </Toolbar>
        </AppBar>
        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="https://staticg.sportskeeda.com/editor/2022/11/af367-16694877678280-1920.jpg"
                title="Primary Weapon"
              />
              <CardContent className={classes.content}>
                <Typography variant="h5" component="h2">
                  Krig 6
                </Typography>
                <Typography variant="subtitle1" component="p">
                  Assault Rifle
                </Typography>
                <Divider className={classes.divider} />
                <Box display="flex" alignItems="center" justifyContent="center" className={classes.box}>
                  <Badge badgeContent={4} max={999} classes={{ badge: classes.badge }}>
                    <AttachMoney className={classes.icon} />
                  </Badge>
                  <Typography variant="subtitle1" component="p">
                    55
                  </Typography>
                  <Divider orientation="vertical" className={classes.divider} flexItem />
                  <Badge badgeContent={3} max={999} classes={{ badge: classes.badge }}>
                    <CompareArrows className={classes.icon} />
                  </Badge>
                  <Typography variant="subtitle1" component="p">
                    61
                  </Typography>
                </Box>
                <Divider className={classes.divider} />
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Typography variant="subtitle1" component="p">
                    Perks
                  </Typography>
                  <ExpandMore className={classes.icon} />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="https://staticg.sportskeeda.com/editor/2022/11/af367-16694877678280-1920.jpg"
                title="Secondary Weapon"
              />
              <CardContent className={classes.content}>
                <Typography variant="h5" component="h2">
                  M1911
                </Typography>
                <Typography variant="subtitle1" component="p">
                  Pistol
                </Typography>
                <Divider className={classes.divider} />
                <Box display="flex" alignItems="center" justifyContent="center" className={classes.box}>
                  <Badge badgeContent={4} max={999} classes={{ badge: classes.badge }}>
                    <AttachMoney className={classes.icon} />
                  </Badge>
                  <Typography variant="subtitle1" component="p">
                    55
                  </Typography>
                  <Divider orientation="vertical" className={classes.divider} flexItem />
                  <Badge badgeContent={3} max={999} classes={{ badge: classes.badge }}>
                    <CompareArrows className={classes.icon} />
                  </Badge>
                  </Box>
                  </CardContent>
                  </Card></Grid></Grid></div></ThemeProvider>
  
    );
  }
  
  export default Loadout;