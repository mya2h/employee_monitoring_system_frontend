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
import {getUserById} from '../../actions/auth'
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
    useEffect(()=>{
      getUserById()
    },[])
    const classes = useStyles();
    const [values, setValues] = useState(singleUser);

    const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value
        });
      };
    const handleSubmit = (event) =>{
      event.preventDefault()
      console.log(values)
    }
    return(
        <Grid container spacing={3}>
            
  {/* <Grid item xs={4}>
   <Card
        className={classes.root}
       
      >
        <CardContent>
          <Box
            alignItems="center"
            display="flex"
            flexDirection="column"
          >
            <Avatar
              className={classes.avatar}
              src={image}
            />
            <Typography
              color="textPrimary"
              gutterBottom
              variant="h3"
            >
              {user.name}
            </Typography>
            <Typography
              color="textSecondary"
              variant="body1"
            >
              {`${user.city} ${user.country}`}
            </Typography>
            <Typography
              className={classes.dateText}
              color="textSecondary"
              variant="body1"
            >
              {`${moment().format('hh:mm A')} ${user.timezone}`}
            </Typography>
          </Box>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            fullWidth
            variant="text"
          >
            Upload picture
          </Button>
        </CardActions>
      </Card>

      </Grid> */}
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
                label="First name"
                name="firstName"
                onChange={handleChange}
                required
                value={singleUser.firstName}
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
                label="Last name"
                name="lastName"
                onChange={handleChange}
                required
                value={singleUser.lastName}
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
                onChange={handleChange}
                required
                value={singleUser.userName}
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
                onChange={handleChange}
                required
                value={singleUser.email}
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



