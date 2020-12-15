import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {getDeviceCount} from '../../actions/dashboard'
import axios from 'axios'
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
    fontSize: 32,
    fontFamily: 'Times New Roman Georgia',
    marginTop:theme.spacing(2),
    color: 'inherit',
    fontWeight:'bold',
    color:'rgba(52, 49, 76, 1)',
    lineHeight: '1.1'
  },
}));

const Label = () =>{
  const [device,setDevice] = React.useState({value:0})
  const [file,setFile] = React.useState({value:0})
  const [group,setGroup] = React.useState({value:0})
  const [suspicous,setSuspicious] = React.useState({value:0})
  useEffect(() => {
    const config = {
      headers:{
          'Content-Type': 'application/json'
      }
  }
  try {
      axios.get('http://localhost:5000/api/dashboard/devices', config).then((data)=>{
        setDevice(data.data)
      })
      axios.get('http://localhost:5000/api/dashboard/suspicious', config).then((data)=>{
        setSuspicious(data.data)
      })
      axios.get('http://localhost:5000/api/dashboard/groups', config).then((data)=>{
        setGroup(data.data)
      })
      axios.get('http://localhost:5000/api/dashboard/suspiciousFiles', config).then((data)=>{
        setFile(data.data)
      })
     
  }
  catch (err) {
      console.log(err.response)
  }
  }, [])
  // useEffect(async () => {
  //   const config = {
  //     headers:{
  //         'Content-Type': 'application/json'
  //     }
  // }
  // try {
  //     const res = await axios.get('http://localhost:5000/api/dashboard/suspiciousFiles', config)
  //     setFile(res.data)
  // }
  // catch (err) {
  //     console.log(err.response)
  // }
  // }, [])
  // useEffect(async () => {
  //   const config = {
  //     headers:{
  //         'Content-Type': 'application/json'
  //     }
  // }
  // try {
  //     const res = await axios.get('http://localhost:5000/api/dashboard/suspicious', config)
  //     setSuspicious(res.data)
  // }
  // catch (err) {
  //     console.log(err.response)
  // }
  // }, [])
  // useEffect(async () => {
  //   const config = {
  //     headers:{
  //         'Content-Type': 'application/json'
  //     }
  // }
  // try {
  //     const res = await axios.get('http://localhost:5000/api/dashboard/groups', config)
  //     setGroup(res.data)
  // }
  // catch (err) {
  //     console.log(err.response)
  // }
  // }, [])
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
        {device.value}
            
      
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
        
           {suspicous.value}
      
          </Grid>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={9} className={classes.title}>
               Suspicious Activities(website/app)
                </Grid>
        </Grid>
        </Paper>
        <Paper elevation={3} className={classes.count} >
        <Grid container spacing={0}>
          <Grid item xs={2} className = {classes.icon}>
            <ShoppingCartIcon/>
          </Grid>
          <Grid item xs={9} className={classes.amount}>
        {file.value}      
          </Grid>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={9} className={classes.title}>
               Suspicious Files
                </Grid>
        </Grid>
        </Paper>
        <Paper elevation={3} className={classes.count}>
        <Grid container spacing={0}>
          <Grid item xs={2} className = {classes.icon}>
            <ShoppingCartIcon/>
          </Grid>
          <Grid item xs={9} className={classes.amount}>
        {group.value}
          </Grid>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={9} className={classes.title}>
               Device Groups
                </Grid>
        </Grid>
        </Paper>
      </div>
      </div>
    )
}
export default Label