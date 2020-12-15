import React,{ useEffect, useState } from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import image from '../../assets/images/2.jpg'
import {getUserById,changeProfile} from '../../actions/auth'
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,

  
  CardHeader,
  
  TextField,
 
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    height: 100,
    width: 100
  },
  all:{
    margin:theme.spacing(10),
    padding:theme.spacing(10)
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

const Profile=({getUserById,individual:{singleUser}})=>{
  useEffect(() => {
    getUserById()
    // if (singleUser!={}) {
    //  setValues(singleUser)
    // }
  }, [])
    // useEffect(()=>{
    //   getUserById()
    //   setValues(singleUser)
    // },[])
    const classes = useStyles();
    const [values, setValues] = useState(null);

    const handleChange = (event) => {
        setValues({...values,[event.target.name]: event.target.value});
      };
    const handleSubmit = (event) =>{
      event.preventDefault()
      console.log(values)
      changeProfile(values)
    }
    return(
        <Grid container spacing={3}>
     <Grid item xs={8} className={classes.all}>
     <form
      onSubmit={handleSubmit}
      className={classes.root}
      
    > 
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <Divider />
        <CardContent>

          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
              fullWidth
              variant="outlined"
               label="First name"
               name="firstName"
               defaultValue={singleUser.firstName}
               onChange={(event) => handleChange(event)}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
              
                fullWidth
                label="Last name"
                name="lastName"
                defaultValue={singleUser.lastName}
                onChange={(event) => handleChange(event)}
                required
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="User Name"
                name="userName"
                onChange={(event) => handleChange(event)}
                required
                defaultValue={singleUser.userName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                required
                defaultValue={singleUser.email}
                onChange={(event) => handleChange(event)}
                variant="outlined"
              />
            </Grid>
          </Grid>

        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Button
            color="primary"
            variant="contained"
            type='submit'
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>
      
      </Grid>
        </Grid>
        
        
       
                  
   
      
 
    )

}
Profile.propTypes = {
  getUserById: PropTypes.func.isRequired,
  individual:PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  users: state.users,
  individual:state.individual
})
export default connect(mapStateToProps, {getUserById })(Profile)



