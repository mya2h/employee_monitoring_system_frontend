import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import { forwardRef } from 'react';
import MaterialTable from 'material-table';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { RadioGroup, Paper } from '@material-ui/core';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import BlockIcon from '@material-ui/icons/Block';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import Check from '@material-ui/icons/Check';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Delete from '@material-ui/icons/Delete'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Telegram from '@material-ui/icons/Telegram';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import { makeStyles } from '@material-ui/core/styles';
import SignUp from '../auth/signup'
import Container from '@material-ui/core/Container';

const tableIcons = {
  Check: forwardRef((props, ref) => <Check style={{
    color: '#156c94'
  }} {...props} ref={ref} />),
  Block: forwardRef((props, ref) => <BlockIcon style={{
    color: '#156c94'
  }} {...props} ref={ref} />),

  Delete: forwardRef((props, ref) => <Delete style={{
    color: '#e64f47',
  }} {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear style={{
    color: '#e64f47',
  }} {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit style={{
    color: '#156c94',
  }} {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};
const useStyles = makeStyles(theme => ({
  all: {
    margin: theme.spacing(4)
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(5)
    // marginLeft:theme.spacing(4)
  },
  form: {
    width: '80%', // Fix IE 11 issue.
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(10)
  },
  // paper: {
  //   marginTop: theme.spacing(8),
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  // },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
  },
  label:{
    margin: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: theme.spacing(1),
    backgroundColor: '#1976d2'
  },
  // radio:{
  //   float : "left"
  // }
}));

const Account = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('')
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className={classes.all}>
      <div className={classes.table}>
        <MaterialTable
          title="Users List"
          columns={[
            { title: 'First Name', field: 'firstName' },
            { title: 'Last Name', field: 'lastName' },
            { title: 'Email', field: 'email'},
            { title: 'User Name', field: 'userName'},
            { title: 'Role', field: 'role'}
          ]}
          data={[
            { firstName: 'Kalkidan', lastName: 'Mesfin', email: 'kal@gmail', userName: 'kal234',role:'Super Admin' },
            { firstName: 'Melkam', lastName: 'Beyene', email: 'melkam@gmail', userName: 'melkam12we',role:'HR Personnel' },
            { firstName: 'G/tsadik', lastName: 'Alebel', email: 'gebre@gmail', userName: 'Gebre34',role:'Super Admin' },
            { firstName: 'Kalkidan', lastName: 'Getinet', email: 'kalG@gmail', userName: 'kalG34',role:'HR Personnel' },
          ]}
          // options={{
          //   headerStyle: {
          //     backgroundColor: '#be8582',
          //     color: '#FFF'
          //   }
          // }}
          actions={[
            {
              icon: () => <BlockIcon style={{
                color: '#e64f47',
              }}/>,
              tooltip: 'activate/deactivate User',
              onClick: (event, rowData) => alert("You saved " + rowData.name)
            }
          ]}
          editable={{
            onRowUpdate: (newData, oldData) =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                }, 600);
              }),
            // onRowDelete: oldData =>
            //   new Promise((resolve, reject) => {
            //     resolve();
            //   }),
          }}
          icons={tableIcons}
        />
      </div>
<SignUp/>
    </div>

  );
}
export default Account