import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Notifications, { success } from 'react-notification-system-redux';
import Drawer from "@material-ui/core/Drawer";
import Divider from '@material-ui/core/Divider';
import Popover from '@material-ui/core/Popover';
import image from '../../assets/images/2.jpg'
import { Link } from 'react-router-dom';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import {BrowserRouter as Router,Switch,Redirect,Route,} from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from '@material-ui/core/Avatar';
import SideNav from "./sideNav";
import GraphInfo from "../dashboard/dashboard";
import Device from "../devices/devices";
import Resource from "../resources/resources"
import DoNotTrack from "../settings/donottrack"
import Settings from "../settings/settings";
import Reports from "../reports/reports";
import TopWebsite from "../reports/top_website"
import TopApplications from "../reports/top_application"
import TopCategories from "../reports/top_categories"
import Account from "../account/account";
import Profile from "../account/profile"
import TopUsers from "../reports/top_users";
import Categories from "../settings/categories"
import SuspiciousActivities from '../activities/suspiciousActivities'
import RegisterSuspiciousActivities from '../activities/registerSuspiciousActivities'
import ActivityLog from '../reports/activity_log'
import WorkingHours from '../reports/working_hours'
import {logout} from '../../actions/auth'
import { Button } from "@material-ui/core";
const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  rootNotification: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paperNotification: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    backgroundColor:'rgba(65, 63, 63, 0.030)'
  },
  paperNotificationSeen: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    // backgroundColor:'rgba(65, 63, 63, 0.030)'
  },
  // popup:{
  //   backgroundColor:'rgba(65, 63, 63, 0.030)'
  // },
  toolbar: {},
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  side: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    // overflowY:'hidden'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "rgb(255, 255, 255)",
    // borderBottom: "1px solid rgba(0, 0, 0, 0.18)",
    
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    float: "left",
  },
  notifyicon: {
    float: "right",
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    color: "#fff",
    fontSize: "18px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: "normal",
    lineHeight: "30px",
       color: "#fff",
  },
  span: {
    fontSize: 33,
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: 400,
    lineHeight: "30px",
    color: "#b3d8fd",
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    backgroundColor: "#1A2038",
    height: '100vh',
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    paddingTop: theme.spacing(9),
    overflow: "auto",
    backgroundColor: "rgba(65, 63, 63, 0.030)",
  },
  container: {
    paddingBottom: theme.spacing(4),
  },
  margin: {
 
  },
  customBadge: {
    backgroundColor: "rgb(255, 175, 56)",
    color: "white"
  },
  paper: {
    padding: theme.spacing(1),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    minHeight: 570,
  },
  icon: {
    color: "white",
  },
}));
const notificationOpts = {
  // uid: 'once-please', // you can specify your own uid if required
  title: 'Hey, it\'s good to see you!',
  message: 'Now you can see how easy it is to use notifications in React!',
  position: 'tr',
  autoDismiss: 0,
  action: {
    label: 'Click me!!',
    callback: () => alert('clicked!')
  }
};
const Dashboard = ({auth:{isAuthenticated,token},logout}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const switchRoute = (
    <Switch>
      <Route exact path="/admin/dashboard" component={GraphInfo} />
      <Route exact path="/admin/device" component={Device} />
      <Route exact path="/admin/report" component={Reports} />
      <Route exac path = "/admin/report/workingHours" component={WorkingHours}/>
      <Route exact path="/admin/resource" component={Resource}/>
      <Route exact path="/admin/setting/donottrack" component={DoNotTrack}/>
      <Route exact path="/admin/setting" component={Settings}/>
      <Route exact path="/admin/report/topwebsite" component={TopWebsite}/>
      <Route exact path ="/admin/report/topapplication" component={TopApplications}/>
      <Route exact path="/admin/report/topusers" component={TopUsers}/>
      <Route exact path="/admin/report/topcategories" component={TopCategories}/>
      {/* <Route exact path="/admin/report/activitylog" component={ActivityLog}/> */}
      <Route exact path ="/admin/setting/categories" component={Categories}/>

      <Route exact path="/admin/report/topwebsite" component={TopWebsite}/>
      <Route exact path ="/admin/report/topapplication" component={TopApplications}/>
      <Route exact path="/admin/report/topusers" component={TopUsers}/>
      <Route exact path ="/admin/categories" component={Categories}/>

      <Route exact path="/admin/account" component={Account} />
      <Route exact path="/admin/profile" component={Profile}/>
      <Route exact path ="/admin/donottrack" component={DoNotTrack}/>
      <Route exact path = "/admin/suspiciousActvities" component={SuspiciousActivities}/>
      <Route exact path = "/admin/registerActivity" component ={RegisterSuspiciousActivities}/>
      <Route exact path ="/admin/report/ActivityLog" component ={ActivityLog}/>
      <Redirect from="/admin" to="/admin/dashboard" />
    </Switch>
  );
  const handleDrawerClose = () => {
    console.log(window.location.pathname)
    if (open == true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleProfile = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorNotification, setAnchorNotififcation] = React.useState(null);
  const [notification,setNotification] = React.useState([
    {
      message:`DeviceUser Desktop12 is delete file.js at time 3:12 2020/12/04.`,
      seen:false
    },
    {
      message:`DeviceUser Desktop12as is watching Youtube.com at time 3:12 2020/12/04`,
      seen:false
    },
    {
      message:`DeviceUser Desktop12as is watching Syber.exe at time 3:12 2020/12/04`,
      seen:true
    }
  ])
  const handleClick = (event) => {
    setAnchorNotififcation(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setAnchorNotififcation(null);
  };
  const handleNotification = (item,index) =>{
    notification[index].seen = true
    console.log(notification)
  }
  const handleLogout = ()=>{
    logout()
  }
  const openNotification = Boolean(anchorNotification);
  const id = openNotification ? 'simple-popover' : undefined;
  
  if (token == null) {
    return (
      <Redirect to="/" />
    )
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <IconButton style={{ marginLeft: "90%" }} onClick={handleClick}>
            <Badge badgeContent={4} color="primary" 
            classes={{ badge: classes.customBadge }}
        className={classes.margin} >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Popover
        id={id}
        anchorReference="anchorPosition"
       
        open={openNotification}
        anchorPosition={{ top: 30, left: 850 }}
        anchorEl={anchorNotification}
        onClose={handleNotificationClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <div  className={classes.popup}>
        {notification.length > 0 && notification.map((item,index)=>(
          <div >
               {item.seen == true && 
               <div>
                      <Link to="" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick = {()=> handleNotification(item,index)}>
                      <Paper className={classes.paperNotificationSeen} elevation={0}>
                          <Grid container wrap="nowrap" spacing={2}>
                           <Grid item xs>
                             <Typography>{item.message}</Typography>
                           </Grid>
                          
                         </Grid>
                       </Paper>
                      </Link>
                        <Divider light/>
                        </div>
               }
               {item.seen == false && 
               <div>
               <Link to="" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick = {()=> handleNotification(item,index)}>
                      <Paper className={classes.paperNotification} elevation={0}>
                          <Grid container wrap="nowrap" spacing={2}>
                           <Grid item xs>
                             <Typography>{item.message}</Typography>
                           </Grid>
                          
                         </Grid>
                       </Paper>
                      </Link>
                        <Divider light/>
                        </div>
               }
              </div>
            
        ))}
          </div>
      </Popover>
          <IconButton onClick={handleProfile}>
              <br />
              <div className={classes.title}>
              </div>
              {/* <Person /><ArrowDropDownIcon /> */}
              <Avatar alt="Remy Sharp" src={image} />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
<Link  to="/admin/profile" variant='body2' style={{ color: 'inherit', textDecoration: 'inherit' }}> <MenuItem >Profile</MenuItem></Link>
          
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
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
          <Typography
            component="h1"
            variant="h6"
            noWrap
            className={classes.title}
          >
            Employee<span className={classes.span}>Track</span>
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon className={classes.icon} />
          </IconButton>
        </div>
        <div className={classes.side}>
        <SideNav />
        </div>
      </Drawer>
      <main className={classes.content}>
        <div>{switchRoute}</div>
      </main>
    </div>
  );
};
Dashboard.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth
})
export default connect(mapStateToProps, {logout})(Dashboard)

