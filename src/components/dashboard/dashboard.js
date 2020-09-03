import React,{useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Label from './topLables'
import BarGraph from './barGraph'
import LowerLabel from './lowerLable'
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
        <BarGraph/>
        <LowerLabel/>
        </div>    
    )
}
export default GraphInfo