import React from 'react'
import Label from './topLables'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles(theme => ({
    all: {
      marginTop: theme.spacing(4),
    },
    title:{
        fontSize: '1.5rem',
        marginLeft: theme.spacing(3),
        lineHeight: '1.1',
        display: 'flex',
        flexWrap: 'wrap',
        color:'#1A2038'
    }
  }));
const GraphInfo = () =>{
    const classes = useStyles()
    return(
        <div className = {classes.all}>
           <h3 className = {classes.title}>Dashboard</h3>
        <Label/>
        </div>    
    )
}
export default GraphInfo