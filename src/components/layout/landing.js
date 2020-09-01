import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import { Switch, Redirect, Route } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SideNav from './sideNav'
import CustomInput from './custom'
import GraphInfo from '../dashboard/dashboard'


const drawerWidth = 260;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
  
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: 'rgb(255, 255, 255)',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
   float: 'left'
  },
  notifyicon:{
    float: "right"
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    color:"#fff",
    fontSize: '18px',
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: 400,
    lineHeight: '30px'
    // text-transform: uppercase;
    // text-decoration: none;
    // background-color: transparent;
  },
  span:{
    color: "#00bbff",
    fontSize: 23,
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: 400,
    lineHeight: '30px'
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    backgroundColor: 'rgba(52, 49, 76, 1)',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  // appBarSpacer: theme.mixins.toolbar,
  content: {
    marginTop: '400px',
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(1),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    minHeight: 570,
  },
  icon:{
    color: 'white'
  }
}));
const switchRoute = (
  <Switch>
    <Route exact path = "/admin/dashboard" component = {GraphInfo}/>
   
  </Switch>
)
const Dashboard =()=> {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    if(open == true){
      setOpen(false);
    }
    else{
      setOpen(true)
    }
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton> 
          {/* <Typography component="h1" variant="h6"  noWrap className={classes.title}>
            Dashboard
          </Typography> */}
          <IconButton style={{marginLeft:'90%'}}>
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar> 
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
        <Typography component="h1" variant="h6"  noWrap className={classes.title}>
            Employee<span className={classes.span}>Track</span>

          </Typography>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon className={classes.icon}/>
          </IconButton>
        </div>
        <Divider light/>
    
      <SideNav />
      </Drawer>
      <main className={classes.content}>
        <div>
        {switchRoute}
        </div>
      </main>
    </div>
  )
    }
 export default Dashboard   