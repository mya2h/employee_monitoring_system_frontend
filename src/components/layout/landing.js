import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SideNav from "./sideNav";
import CustomInput from "./custom";
import GraphInfo from "../dashboard/dashboard";
import Device from "../devices/devices";
import Resource from "../resources/resources"
import DoNotTrack from "../settings/donottrack"
import  Settings from "../settings/settings"
import Reports from "../reports/reports";
import TopWebsite from "../reports/top_website"
import TopApplications from "../reports/top_application"
import TopCategories from "../reports/top_categories"
import Account from "../account/account";
import TopUsers from "../reports/top_users";
import Categories from "../settings/categories"
import ActivityLog from "../reports/activity_log"

import SuspiciousActivities from '../activities/suspiciousActivities'

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {},
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
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

const Dashboard = () => {
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

      <Route exact path="/admin/resource" component={Resource}/>
      <Route exact path="/admin/setting/donottrack" component={DoNotTrack}/>
      <Route exact  path="/admin/setting" component={Settings}/>
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
      <Route exact path ="/admin/donottrack" component={DoNotTrack}/>
      <Route exact path = "/admin/suspiciousActvities" component={SuspiciousActivities}/>
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
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
      //  elevation={0}
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
      {/* <p>title</p> */}
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
          {/* <Typography component="h1" variant="h6"  noWrap className={classes.title}>
            Dashboard
          </Typography> */}
          <IconButton style={{ marginLeft: "90%" }}>
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
        {/* <Divider light style={{backgroundColor:"#c5c5c5ad",marginBottom:"18px",marginTop:"5px"}} /> */}

        <SideNav />
      </Drawer>
      <main className={classes.content}>
        <div>{switchRoute}</div>
      </main>
    </div>
  );
};
export default Dashboard;
