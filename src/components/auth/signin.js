import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import image from '../../assets/images/admin.png'
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: '12%',
    paddingRight: theme.spacing(8),
    paddingLeft:theme.spacing(8),
    paddingBottom:theme.spacing(9),
    width:'37%',
   borderRadius:'15px'
    
  },
  logo:{
    width:'170px',
    height:'180px',
    marginTop:theme.spacing(7)
  },
  // avatar: {
  //   margin: theme.spacing(1),
  //   backgroundColor: theme.palette.secondary.main,
  // },
  form: {
    width: '83%', // Fix IE 11 issue.
    marginLeft:'18%',
    marginTop:'3%',
  
    // marginRight:'3%'
  },
  submit: {
    marginRight:theme.spacing(22),
    backgroundColor: '#1976d2'
  },
  main:{
    backgroundColor: '#1A2038',
    height: '650px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

const SignIn = () =>{
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Paper className={classes.paper}>
      <Grid container>
            <Grid item xs={4}>
                <img src={image} alt="logo" className={classes.logo} />
            </Grid>
            <Grid item xs={8}>
              <form className={classes.form} noValidate>
          <TextField
            variant="outlined"  
            margin="normal"

            required
            fullWidth
            
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
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
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
            style={{marginRight:'50px'}}
          />
          <br/>
          <Link to = "/admin" style={{ color: 'inherit', textDecoration: 'inherit'}}>
          <Button
            type="submit"
            // fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
              </Link>
          
        </form>
            </Grid>
          </Grid>
       
      </Paper>
    </div>
  );
}
export default SignIn