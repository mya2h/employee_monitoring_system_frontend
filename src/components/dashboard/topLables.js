import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PaymentIcon from '@material-ui/icons/Payment';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      marginLeft: theme.spacing(3),
      // marginTop: theme.spacing(5),
      width: '22%',
      height: theme.spacing(14),
    },
  },
  count:{
    borderRadius:'12px'
  },
  grid1: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      marginLeft: theme.spacing(1),
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5)
    },


  },
  icon:{
   marginTop: 25,
   paddingLeft:27,
   color:'rgba(52, 49, 76, 0.54) !important'
    
    // margin:theme.spacing(2)
  },
  title: {
    paddingTop: 10,
    fontSize: 15,
    color:'rgba(52, 49, 76, 0.54) !important'

  },
  amount: {
    fontSize: 40,
    fontFamily: 'Times New Roman Georgia',
    marginTop:theme.spacing(2),
    color: 'inherit',
    fontStyle:'bold',
    lineHeight: '1.1'
  },
}));

const Label = () =>{
    const classes = useStyles()
    return(
      <div>
        <div className={classes.root}>
        <Paper elevation={3} className={classes.count} >
        <Grid container spacing={0}>
          <Grid item xs={2} className = {classes.icon}>
            <ShoppingCartIcon/>
          </Grid>
          <Grid item xs={9} className={classes.amount}>
        
             12,234
      
          </Grid>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={9} className={classes.title}>
               All Devices
                </Grid>
        </Grid>
        </Paper>
        <Paper elevation={3} className={classes.count}>
        <Grid container spacing={0}>
          <Grid item xs={2} className = {classes.icon}>
            <ShoppingCartIcon/>
          </Grid>
          <Grid item xs={9} className={classes.amount}>
        
             2,234
      
          </Grid>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={9} className={classes.title}>
               Suspicious Activities
                </Grid>
        </Grid>
        </Paper>
        <Paper elevation={3} className={classes.count} >
        <Grid container spacing={0}>
          <Grid item xs={2} className = {classes.icon}>
            <ShoppingCartIcon/>
          </Grid>
          <Grid item xs={9} className={classes.amount}>
        
             569
      
          </Grid>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={9} className={classes.title}>
               All Devices
                </Grid>
        </Grid>
        </Paper>
        <Paper elevation={3} className={classes.count}>
        <Grid container spacing={0}>
          <Grid item xs={2} className = {classes.icon}>
            <ShoppingCartIcon/>
          </Grid>
          <Grid item xs={9} className={classes.amount}>
        
             234
      
          </Grid>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={9} className={classes.title}>
               All Devices
                </Grid>
        </Grid>
        </Paper>
      </div>
      </div>
    )
}
export default Label