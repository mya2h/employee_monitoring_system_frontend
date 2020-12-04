import React from 'react';
import Button from '@material-ui/core/Button';
import { RadioGroup, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Telegram from '@material-ui/icons/Telegram';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel'
import { connect } from 'react-redux';
import {register} from '../../actions/auth'

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
  clear: {
    margin: theme.spacing(3, 0, 2),
    padding: theme.spacing(1),
    backgroundColor: '#1A2038',
    '&:hover': {
      background: "rgb(87, 95, 126)",
    },
  },
  label: {
    margin: theme.spacing(2),
    color: '#1A2038',
    fontWeight: 'bold',
    fontSize: 30
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: theme.spacing(1),
    background: "#1976d2",
    '&:hover': {
        background: "#447fb9",
    },
  },
}));

const SignUp = ({register}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState('')
  const [user, setUser] = React.useState({
    firstName: '',
    lastName: '',
    userName: '',
    roleType: '',
    email: '',
    password: '',
    confirm_password: ''
  })

  const handleChange = (event) => {
    console.log(event.target.value)
    setUser({ ...user, [event.target.name]: event.target.value })
  };
  const handelRadioChange = (event) => {
    setUser({ ...user, roleType: event.target.value })
    setValue(event.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
    register(user)
    setUser({
      firstName: '',
      lastName: '',
      userName: '',
      roleType: '',
      email: '',
      password: '',
      confirm_password: ''
    })
    setValue('')
  }
  const clearData = () => {
    setUser({
      firstName: '',
      lastName: '',
      userName: '',
      roleType: '',
      email: '',
      password: '',
      confirm_password: ''
    })
    setValue('')
  }
  return (
    <div >
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5" className={classes.label}>
          Register User
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                value = {user.firstName}
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                value = {user.lastName}
                name="lastName"
                autoComplete="lname"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                value = {user.email}
                name="email"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="userName"
                label="User Name"
                value = {user.userName}
                name="userName"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl  component="fieldset">
              <FormLabel component="legend">Role</FormLabel>
                <RadioGroup  aria-label="role" name="roleType" value={value} onChange={handelRadioChange} row>
                  <FormControlLabel value="superAdmin" control={<Radio />} label="Super Admin" className={classes.radio} />
                  <FormControlLabel value="hrPersonnel" control={<Radio />} label="HR Personnel" className={classes.radio} />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                value = {user.password}
                type="password"
                id="password"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                name="confirm_password"
                label="Confirm Password"
                value = {user.confirm_password}
                type="password"
                id="password"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={2}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                <Telegram /> Register
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.clear}
                onClick={clearData}
              >
                <Telegram /> Clear
          </Button>
            </Grid>
          </Grid>

          {/* <Grid container justify="flex-end">
            <Grid item>
            <Link to = "/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                Already have an account? Sign in
            </Link>
            </Grid>
          </Grid> */}
        </form>
      </Paper>
    </div>

  );
}
SignUp.propTypes={
  register:PropTypes.func.isRequired
}
export default connect(null,{register})(SignUp);