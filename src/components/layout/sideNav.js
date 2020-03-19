import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import DashboardIcon from '@material-ui/icons/Dashboard';
import TodayIcon from '@material-ui/icons/Today';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import SettingsIcon from '@material-ui/icons/Settings';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import CategoryIcon from '@material-ui/icons/Category';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  sideNav: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested:{
    paddingLeft: 44
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

const SideNav = ()=> {
  const classes = useStyles();
  const [openSide, setOpenSide] = React.useState(null);
  const [openReport,setOpenReport] = React.useState(null)

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
    >
      <Link style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </Link>
        <ListItem button onClick={handleOrder}>
          <ListItemIcon>
            <LibraryBooksIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
           {openReport ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
      <Collapse in={openReport} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <Link style={{ color: 'inherit', textDecoration: 'inherit'}}>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
                <TodayIcon/>
            </ListItemIcon>
            <ListItemText primary="Daily Report" />
          </ListItem>
          </Link> 
          <Link style={{ color: 'inherit', textDecoration: 'inherit'}}>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <ViewWeekIcon />
            </ListItemIcon>
            <ListItemText primary="Weekly Report" />
          </ListItem>
          </Link>
          <Link style={{ color: 'inherit', textDecoration: 'inherit'}}>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <DateRangeIcon />
            </ListItemIcon>
            <ListItemText primary="Monthly Report" />
          </ListItem>
          </Link>
        </List>
      </Collapse>
      <Link style={{ color: 'inherit', textDecoration: 'inherit'}}>
      <ListItem button>
        <ListItemIcon>
          <FileCopyIcon />
        </ListItemIcon>
        <ListItemText primary="Resources" />
      </ListItem>
      </Link>
      <ListItem button>
        <ListItemIcon>
          <DevicesOtherIcon />
        </ListItemIcon>
        <ListItemText primary="Devices" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LocalActivityIcon />
        </ListItemIcon>
        <ListItemText primary="Activities" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
        {openSide ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openSide} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link style={{ color: 'inherit', textDecoration: 'inherit'}}>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <CategoryIcon/>
            </ListItemIcon>
            <ListItemText primary="Categories" />
          </ListItem>
          </Link>
          <Link style={{ color: 'inherit', textDecoration: 'inherit'}}>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <NotInterestedIcon />
            </ListItemIcon>
            <ListItemText primary="Do Not Track" />
          </ListItem>
          </Link>
        </List>
      </Collapse>
      <ListItem button>
        <ListItemIcon>
          <AttachMoneyIcon />
        </ListItemIcon>
        <ListItemText primary="Account" />
      </ListItem>
    </List>
  );
}
export default SideNav;
