import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import List from "@material-ui/core/List";
import { NavLink } from 'react-router-dom';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import DashboardIcon from "@material-ui/icons/Dashboard";
import TodayIcon from "@material-ui/icons/Today";
import LocalActivityIcon from "@material-ui/icons/LocalActivity";
import SettingsIcon from "@material-ui/icons/Settings";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import DevicesOtherIcon from "@material-ui/icons/DevicesOther";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import CategoryIcon from "@material-ui/icons/Category";
import '../../assets/css/sideNav.css'
import '../../assets/css/scroll.css'
import { Link } from "react-router-dom";
const theme = createMuiTheme({
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 13,
    fontFamily: [
      // '-apple-system',
      // 'BlinkMacSystemFont',
      // '"Segoe UI"',
      'Roboto',
      // '"Helvetica Neue"',
      // 'Arial',
      'sans-serif',
      // '"Apple Color Emoji"',
      // '"Segoe UI Emoji"',
      // '"Segoe UI Symbol"',
    ].join(','),
  },
  flexGrow: 1,
  flexshrink: 1,
  flexBasis: 'auto'
});
const useStyles = makeStyles((theme) => ({
  sideNav: {
    width: "100%",
    maxWidth: 300,
    marginTop: 42,
    color: "#d1d1d1",
  },
  nested: {
    paddingLeft: 44,
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  icon: {
    color: "#d1d1d1",
  },
}));

const SideNav = ({auth:{role}}) => {
  const classes = useStyles();
  const [openSide, setOpenSide] = React.useState(null);
  const [openReport, setOpenReport] = React.useState(null);
  const [selectedIndex, setSelected] = React.useState(0)
  const handleClick = () => {
    setOpenSide(!openSide);
  };
  const handleOrder = () => {
    setOpenReport(!openReport);
  };
  return (
    <MuiThemeProvider theme={theme}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.sideNav}
        activeclassname="active"
      >
        <NavLink
          to="/admin/dashboard"
          className="Nav_link"
          activeClassName="activeRoute"
          activeStyle={{ color: 'rgb(253, 184, 81)' }}
        >
          <ListItem button className={classes.listitem}>
            <ListItemIcon className={classes.icon}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </NavLink>
        <NavLink
          to="/admin/resource"
          className="Nav_link"
          activeClassName="activeRoute"
          activeStyle={{ color: 'rgb(253, 184, 81)' }}
        >
          <ListItem button className={classes.listitem}>
            <ListItemIcon className={classes.icon}>
              <FileCopyIcon />
            </ListItemIcon>
            <ListItemText primary="Resources" />
          </ListItem>
        </NavLink>
        <NavLink
          to="/admin/device"
          className="Nav_link"
          activeClassName="activeRoute"
          activeStyle={{ color: 'rgb(253, 184, 81)'}}
        >
          <ListItem button className={classes.listitem}>
            <ListItemIcon className={classes.icon}>
              <DevicesOtherIcon />
            </ListItemIcon>
            <ListItemText primary="Devices" />
          </ListItem>
        </NavLink>
        <NavLink
          to="/admin/suspiciousActvities"
           className="Nav_link"
          activeClassName="activeRoute"
          activeStyle={{ color: 'rgb(253, 184, 81)' }}>
          <ListItem button className={classes.listitem}>
            <ListItemIcon className={classes.icon}>
              <LocalActivityIcon />
            </ListItemIcon>
            <ListItemText primary="Suspicious Activities" />
          </ListItem>
        </NavLink>
        <ListItem button onClick={handleOrder} className={classes.listitem}>
          <ListItemIcon className={classes.icon}>
            <LibraryBooksIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
          {openReport ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openReport} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <NavLink
              to="/admin/report/topwebsite"
               className="Nav_link"
          activeClassName="activeRoute"
          activeStyle={{ color: 'rgb(253, 184, 81)' }}
            >
              <ListItem button className={classes.nested}>
                <ListItemIcon className={classes.icon}>
                  <TodayIcon />
                </ListItemIcon>
                <ListItemText primary="Top Websites" />
              </ListItem>
            </NavLink>
            <NavLink
              to="/admin/report/topapplication"
               className="Nav_link"
          activeClassName="activeRoute"
          activeStyle={{ color: 'rgb(253, 184, 81)' }}
            >
              <ListItem button className={classes.nested}>
                <ListItemIcon className={classes.icon}>
                  <TodayIcon />
                </ListItemIcon>
                <ListItemText primary="Top Application" />
              </ListItem>
            </NavLink>
            {/* <NavLink
              to="/admin/report/devci"
               className="Nav_link"
          activeClassName="activeRoute"
          activeStyle={{ color: 'rgb(253, 184, 81)' }}
            >
              <ListItem button className={classes.nested}>
                <ListItemIcon className={classes.icon}>
                  <TodayIcon />
                </ListItemIcon>
                <ListItemText primary="Top Files" />
              </ListItem>
            </NavLink> */}
            <NavLink
              to="/admin/report/ActivityLog"
               className="Nav_link"
          activeClassName="activeRoute"
          activeStyle={{ color: 'rgb(253, 184, 81)' }}
            >
              <ListItem button className={classes.nested}>
                <ListItemIcon className={classes.icon}>
                  <TodayIcon />
                </ListItemIcon>
                <ListItemText primary="Activity Log" />
              </ListItem>
            </NavLink>
            {/* <NavLink
              to="/admin/report/workingHours"
               className="Nav_link"
          activeClassName="activeRoute"
          activeStyle={{ color: 'rgb(253, 184, 81)' }}
            >
              <ListItem button className={classes.nested}>
                <ListItemIcon className={classes.icon}>
                  <TodayIcon />
                </ListItemIcon>
                <ListItemText primary="Working Hours" />
              </ListItem>
            </NavLink> */}

          </List>
        </Collapse>
        <ListItem button onClick={handleClick} className={classes.listitem}>
          <ListItemIcon className={classes.icon}>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
          {openSide ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openSide} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <NavLink to="/admin/categories"  className="Nav_link"
          activeClassName="activeRoute"
          activeStyle={{ color: 'rgb(253, 184, 81)' }}>
              <ListItem button className={classes.nested}>
                <ListItemIcon className={classes.icon}>
                  <CategoryIcon />
                </ListItemIcon>
                <ListItemText primary="Categories" />
              </ListItem>
            </NavLink>
            <NavLink to="/admin/donottrack"  className="Nav_link"
          activeClassName="activeRoute"
          activeStyle={{ color: 'rgb(253, 184, 81)' }}>
              <ListItem button className={classes.nested}>
                <ListItemIcon className={classes.icon}>
                  <NotInterestedIcon />
                </ListItemIcon>
                <ListItemText primary="Do Not Track" />
              </ListItem>
            </NavLink>
          </List>
        </Collapse>
        {role == 'SuperAdmin' && (
          <NavLink
          to="/admin/account"
           className="Nav_link"
          activeClassName="activeRoute"
          activeStyle={{ color: 'rgb(253, 184, 81)' }}
        >
          <ListItem button>
            <ListItemIcon className={classes.icon}>
              <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary="Account" />
          </ListItem>
        </NavLink>
        )}
        
      </List>
    </MuiThemeProvider>

  );
};

SideNav.propTypes = {
  auth:PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  auth: state.auth
})
export default connect(mapStateToProps, { })(SideNav)

