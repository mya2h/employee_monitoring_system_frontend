import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import DashboardIcon from "@material-ui/icons/Dashboard";
import TodayIcon from "@material-ui/icons/Today";
import LocalActivityIcon from "@material-ui/icons/LocalActivity";
import SettingsIcon from "@material-ui/icons/Settings";
import ViewWeekIcon from "@material-ui/icons/ViewWeek";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import DevicesOtherIcon from "@material-ui/icons/DevicesOther";
import DateRangeIcon from "@material-ui/icons/DateRange";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import CategoryIcon from "@material-ui/icons/Category";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  sideNav: {
    width: "100%",
    maxWidth: 360,
    color: "#ffffff",
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
    color: "#fff",
  },
}));

const SideNav = () => {
  const classes = useStyles();
  const [openSide, setOpenSide] = React.useState(null);
  const [openReport, setOpenReport] = React.useState(null);

  const handleClick = () => {
    setOpenSide(!openSide);
  };
  const handleOrder = () => {
    setOpenReport(!openReport);
  };
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.sideNav}
      activeClassName="active"
    >
      <Link
        to="/admin/dashboard"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <ListItem button className={classes.listitem}>
          <ListItemIcon className={classes.icon}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </Link>
      <Link
        style={{ color: "inherit", textDecoration: "inherit" }}
        to="/admin/dashboard"
      >
        <ListItem button className={classes.listitem}>
          <ListItemIcon className={classes.icon}>
            <FileCopyIcon />
          </ListItemIcon>
          <ListItemText primary="Resources" />
        </ListItem>
      </Link>
      <Link
        to="/admin/device"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <ListItem button className={classes.listitem}>
          <ListItemIcon className={classes.icon}>
            <DevicesOtherIcon />
          </ListItemIcon>
          <ListItemText primary="Devices" />
        </ListItem>
      </Link>

      <ListItem button className={classes.listitem}>
        <ListItemIcon className={classes.icon}>
          <LocalActivityIcon />
        </ListItemIcon>
        <ListItemText primary="Activities" />
      </ListItem>
      <ListItem button onClick={handleOrder} className={classes.listitem}>
        <ListItemIcon className={classes.icon}>
          <LibraryBooksIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
        {openReport ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openReport} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link
            to="/admin/report/topwebsite"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <ListItem button className={classes.nested}>
              <ListItemIcon className={classes.icon}>
                <TodayIcon />
              </ListItemIcon>
              <ListItemText primary="Top Websites" />
            </ListItem>
          </Link>
          <Link
            to="/admin/report/topapplication"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <ListItem button className={classes.nested}>
              <ListItemIcon className={classes.icon}>
                <TodayIcon />
              </ListItemIcon>
              <ListItemText primary="Top Application" />
            </ListItem>
          </Link>

          <Link
            to="/admin/report/topusers"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <ListItem button className={classes.nested}>
              <ListItemIcon className={classes.icon}>
                <TodayIcon />
              </ListItemIcon>
              <ListItemText primary="Top Users" />
            </ListItem>
          </Link>

          <Link
            to="/admin/report"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <ListItem button className={classes.nested}>
              <ListItemIcon className={classes.icon}>
                <TodayIcon />
              </ListItemIcon>
              <ListItemText primary="Activity Log" />
            </ListItem>
          </Link>
          <Link
            to="/admin/report"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <ListItem button className={classes.nested}>
              <ListItemIcon className={classes.icon}>
                <TodayIcon />
              </ListItemIcon>
              <ListItemText primary="Working Hours" />
            </ListItem>
          </Link>

          <Link
            to="/admin/report"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <ListItem button className={classes.nested}>
              <ListItemIcon className={classes.icon}>
                <TodayIcon />
              </ListItemIcon>
              <ListItemText primary="Daily Report" />
            </ListItem>
          </Link>

          <Link style={{ color: "inherit", textDecoration: "inherit" }}>
            <ListItem button className={classes.nested}>
              <ListItemIcon className={classes.icon}>
                <ViewWeekIcon />
              </ListItemIcon>
              <ListItemText primary="Weekly Report" />
            </ListItem>
          </Link>
          <Link style={{ color: "inherit", textDecoration: "inherit" }}>
            <ListItem button className={classes.nested}>
              <ListItemIcon className={classes.icon}>
                <DateRangeIcon />
              </ListItemIcon>
              <ListItemText primary="Monthly Report" />
            </ListItem>
          </Link>
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
          <Link style={{ color: "inherit", textDecoration: "inherit" }}>
            <ListItem button className={classes.nested}>
              <ListItemIcon className={classes.icon}>
                <CategoryIcon />
              </ListItemIcon>
              <ListItemText primary="Categories" />
            </ListItem>
          </Link>
          <Link style={{ color: "inherit", textDecoration: "inherit" }}>
            <ListItem button className={classes.nested}>
              <ListItemIcon className={classes.icon}>
                <NotInterestedIcon />
              </ListItemIcon>
              <ListItemText primary="Do Not Track" />
            </ListItem>
          </Link>
        </List>
      </Collapse>
      <Link
        to="/admin/account"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <ListItem button>
          <ListItemIcon className={classes.icon}>
            <AttachMoneyIcon />
          </ListItemIcon>
          <ListItemText primary="Account" />
        </ListItem>
      </Link>
    </List>
  );
};
export default SideNav;
