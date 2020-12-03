import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import image from '../../assets/images/admin.png'
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import {Redirect} from 'react-router'
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import {authenticate} from '../../actions/auth'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: '12%',
    paddingRight: theme.spacing(8),
    paddingLeft: theme.spacing(8),
    paddingBottom: theme.spacing(9),
    width: '37%',
    borderRadius: '15px'

  },
  logo: {
    width: '170px',
    height: '180px',
    marginTop: theme.spacing(7)
  },
  form: {
    width: '83%', // Fix IE 11 issue.
    marginLeft: '18%',
    marginTop: '3%',
  },
  submit: {
    marginRight: theme.spacing(22),
    background: "#1976d2",
        '&:hover': {
            background: "#447fb9",
        },
  },
  main: {
    backgroundColor: '#1A2038',
    height: '650px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

const SignIn = ({authenticate,auth:{isAuthenticated}}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState({
    userName: '',
    password: ''
  })
  const handleChange = (e) => {
    console.log(e.target.value)
    setValue({ ...value, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    authenticate(value)
    console.log(value)
  }
  if(isAuthenticated){
    return(
      <Redirect to="/admin"/>
    )
  }
  return (
    <div className={classes.main}>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item xs={4}>
            <img src={image} alt="logo" className={classes.logo} />
          </Grid>
          <Grid item xs={8}>
            <form className={classes.form} onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="userName"
                label="User Name"
                name="userName"
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={handleChange}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                style={{ marginRight: '50px' }}
              />
              <br />
              {/* <Link to="/admin" style={{ color: 'inherit', textDecoration: 'inherit' }}> */}
                <Button
                  type="submit"
                  // fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
          </Button>
              {/* </Link> */}

            </form>
          </Grid>
        </Grid>

      </Paper>
    </div>
  );
}
SignIn.propTypes ={
  authenticate:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired
}
const mapStateToProps = state =>({
  auth:state.auth
})
export default connect(mapStateToProps,{authenticate})(SignIn)