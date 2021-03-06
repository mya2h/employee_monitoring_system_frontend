import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MaterialTable from 'material-table';
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
import { makeStyles } from '@material-ui/core/styles';
import Modal from "@material-ui/core/Modal"
import SignUp from '../auth/signup'
import { getAllUsers, activateUser, deactivateUser } from "../../actions/auth"
import { Button } from '@material-ui/core';
import { Add, Rowing } from '@material-ui/icons';
import {getNotification} from "../../actions/notification"


const tableIcons = {
  Check: forwardRef((props, ref) => <Check style={{
    color: '#2b94b1'
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
    color: '#5a98d6',
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

// const getModalStyle=()=>{
//  co
// }
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
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },

  form: {
    width: '80%', // Fix IE 11 issue.
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(10)
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
  },
  btn: {
    margin: theme.spacing(2)
  },
  label: {
    margin: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: theme.spacing(1),
    background: "#61dafb",
    '&:hover': {
      background: "#b3d8fd",
    },
  },
}));

const rand = () => {
  return Math.round(Math.random() * 20) - 10;
}

const getModalStyle = () => {
  const top = 50 + rand();
  const left = 50 + rand();
  return {
    top: `${top}%`,
    marigin: 'auto'
  };
}

const Account = ({ getAllUsers,getNotification, activateUser,deactivateUser,users: { users, loading } }) => {
  useEffect(() => {
    getAllUsers()
    getNotification()
  }, [])
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')
  const [selectedValue, setSelectedValue] = React.useState('a');
  const [id, setId] = React.useState({

    _id: '',
    status: ''
  });
  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };
  // const handleActivation = (data) => {
  //   console.log(data)
  // }

  const handelOpen = (e) => {
    console.log("e", e._id)
    console.log("e", e.status)
    setId({ ...id, _id: e._id, status: e.status })
    setOpen(true);

  }
  const activate = () => {
    activateUser(id._id);
    console.log("the user is activated")
    handleClose()
  }
  const deactivate = () => {
    deactivateUser(id._id);
    console.log("user is deactivated");
    handleClose()
  }
  const onRowClick = (state, rowInfo, column, instance) => {
    return {
      onClick: e => {
        console.log('A Td Element was clicked!')
        console.log('it produced this event:', e)
        console.log('It was in this column:', column)
        console.log('It was in this row:', rowInfo)
        console.log('It was in this table instance:', instance)
      }
    }
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div className={classes.all}>
      <div className={classes.table}>
        <Modal
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
        >
          <div className={classes.paper}>

            {id.status === 'activated' && (
              <h2>Deactivate the user</h2>
            )}
            {id.status === 'deactivated' && (
              <h2>Activate the user</h2>
            )}
            {/* enable and diable one button based on the status of the user */}
            {id.status === 'activated' && (
              <div>
                <Button className={classes.btn} variant="contained" disabled={true} color="primary" onClick={activate} >Activate </Button>
                <Button variant="contained" color="secondary" onClick={deactivate}>Deactivate </Button>
              </div>
            )}
            {id.status === 'deactivated' && (
              <div>
                <Button className={classes.btn} variant="contained" color="primary" onClick={activate} >Activate </Button>
                <Button variant="contained" disabled={true} color="secondary" onClick={deactivate}>Deactivate </Button>
              </div>
            )}

          </div>
        </Modal>
        <MaterialTable
          title="Users List"
          columns={[
            { title: 'First Name', field: 'firstName' },
            { title: 'Last Name', field: 'lastName' },
            { title: 'Email', field: 'email' },
            { title: 'User Name', field: 'userName' },
            // { title: 'Role', field: 'role' },
            { title: 'Status', field: 'status' }
          ]}
          options={{
            headerStyle: { backgroundColor: 'rgba(221, 221, 221, 0.863)' },
          }}
          data={users}
          getTrProps={onRowClick}
          actions={[
            {
              icon: () => <BlockIcon style={{
                color: '#e64f47',
              }} />,
              tooltip: 'activate/deactivate User',
              onClick: (event, rowData) => { handelOpen(rowData) }
            }
          ]}
          icons={tableIcons}
        />
      </div>
      <SignUp />
    </div>

  );
}

Account.propTypes = {
  getAllUsers: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
  activateUser:PropTypes.func.isRequired,
  deactivateUser:PropTypes.func.isRequired,
  getNotification:PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  users: state.users
})
export default connect(mapStateToProps, { getNotification,activateUser,deactivateUser,getAllUsers })(Account)

