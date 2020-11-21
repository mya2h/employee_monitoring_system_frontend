import React, { useState, useEffect, forwardRef, useCallback } from 'react';
import Grid from "@material-ui/core/Grid"
import Select from '@material-ui/core/Select';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import NativeSelect from '@material-ui/core/NativeSelect';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // flexWrap: 'wrap',
    paddingTop: theme.spacing(2),
    margin:theme.spacing(2) 
  },
  input1: {
    height: 50
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  select:{
    height: "5vh"
  },
  tableRow: {
    "&$selected, &$selected:hover": {
      backgroundColor: "#1a2038a1"
    },
    // "&$selected:selected": {
    //   backgroundColor: "1a2038a1"
    // },
  },
  tableCell: {
    "$hover:hover &": {
      color: "#ffffff !important",
    },
    "$selected &": {
      color: "#ffffff"
    }
  },
  selected: {},
  formControl: {
    marginRight: theme.spacing(3),
    marginBottom:theme.spacing(8),
    minWidth: 120,
    float:"left"

  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

}));
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: 'rgba(221, 221, 221, 0.863)',
    // color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
const TopWebsites = () => {
  const classes = useStyles();
  const [detailData, setDetailData] = React.useState([])
  const [selectedID, setSelectedID] = useState(null);
  const [title,setTitle] = React.useState('')
  const [data, setData] = React.useState([
    {
      id:1,
      website: "localhost:3000",
      duration: "7m 49s",
      percent: "98%",
    
      names:[
        {
          Title: "React App",
          Duration: "10m4s",
          Percent: "20%"
        }
      ]
    },
    {
      id:2,
      website: "material-ui.com",
      duration: "9s",
      percent: "2%",
     
      names:[
        {
          Title: "Select",
          Duration: "10m4s",
          Percent: "20%"
        },
        {
          Title: "Radio button react component",
          Duration: "10m4s",
          Percent: "20%"
        }, {
          Title: "DataGrid ",
          Duration: "10m4s",
          Percent: "20%"
        },
        {
          Title: "React Dialog component",
          Duration: "10m4s",
          Percent: "20%"
        }
      ]
    },
    {
      id:3,
      website: "gitlab.com",
      duration: "9s",
      percent: "2%",
      
      names:[
        {
          Title: "Commits dev",
          Duration: "10m4s",
          Percent: "20%"
        },
        {
          Title: "Employee monitoring system",
          Duration: "10m4s",
          Percent: "20%"
        }, {
          Title: "Employee monitoring system frontend",
          Duration: "10m4s",
          Percent: "20%"
        },
        {
          Title: "Emploeyee monitoring system backend",
          Duration: "10m4s",
          Percent: "20%"
        }
      ]
    },
    {
      id:4,
      website: "medium.com",
      duration: "9s",
      percent: "2%",
     
      names:[
        {
          Title: "Intro to material-table for React ",
          Duration: "10m4s",
          Percent: "20%"
        },
        {
          Title: "Exporting React Components in NPM ",
          Duration: "10m4s",
          Percent: "20%"
        }, {
          Title: "Uploading Files in React While Keeping The UI Completely In Sync",
          Duration: "10m4s",
          Percent: "20%"
        }
      ]
    
    
    
    },
  ])
  const onRowSelection = (e,row) =>{
    console.log(row)
    setDetailData(row.names)
    setSelectedID(row.id);
    setTitle(row.website)
  }
  return (
    <div className={classes.root}>
      <Grid container >
        <Grid item xs={12}>
          <FormControl variant="outlined" className={classes.formControl} >
            <Select
              defaultValue={20}
              className={classes.select}
              variant="outlined"
              inputProps={{
                name: 'date',
                id: 'uncontrolled-native',
              }}
            >
              <option value={10}>Today</option>
              <option value={20}>Yestarday</option>
              <option value={30}>Last 7 days</option>
              <option value={30}>Last 30 days</option>
              <option value={30}>Last year</option>
            </Select>

          </FormControl>

          <FormControl className={classes.formControl}  variant="outlined">

            <Select
            className={classes.select}
              defaultValue={10}
              inputProps={{
                name: 'device',
                id: 'uncontrolled-native',
              }}
            >
              <option value={10}>All computers</option>
              <option value={20}>WINDOWS-5AUTJS3</option>
              <option value={30}>WINDOWS-6AUTJS34</option>
            </Select>

          </FormControl>
          <Button  className={classes.select}  variant="outlined" style={{float:"left"}}>  
          <IconButton aria-label="delete" >
            <RefreshIcon fontSize="small" />
          </IconButton>Refresh</Button>

        </Grid>
        </Grid>
        <Grid container spacing={3}>
        <Divider />
        <Grid item xs={6}>
          <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="simple table" selectable= {true} elevation={0} >
              <TableHead>
                <TableRow >
                  <StyledTableCell align="right">Website</StyledTableCell>
                  <StyledTableCell align="right">Duration&nbsp;</StyledTableCell>
                  <StyledTableCell align="right">%&nbsp;</StyledTableCell>
                  <StyledTableCell align="right">Date&nbsp;</StyledTableCell>
                </TableRow>
              </TableHead>
              <input type="text" name="group" placeholder="Filter Titles" style={{
                            width: "200px",
                            padding: "8px 10px",
                            margin: "8px 0",
                            boxSizing: "border-box"
                        }} />
                        <br/>
              <TableBody>
                {data.map((row) => (
                  <TableRow 
                  selected={selectedID === row.id}
                  classes={{selected: classes.selected }}
                  className={classes.tableRow}
                  hover
                  key={row.id}
                  onClick={(event) => onRowSelection(event, row)}>
                    <TableCell align="left" className={classes.tableCell}>{row.website}</TableCell>
                    <TableCell align="left" className={classes.tableCell}>{row.duration}</TableCell>
                    <TableCell align="left" className={classes.tableCell}>{row.percent}</TableCell>
                    <TableCell align="left" className={classes.tableCell}>{row.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={6}>
        {detailData.length !=0 && detailData.length != null &&(
          <div>
          <Typography variant="h5" component="h2" style = {{marginBottom:"10px"}}>
         {title}
        </Typography>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table" size="small">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">Title</StyledTableCell>
                  <StyledTableCell align="left">Duration&nbsp;</StyledTableCell>
                  <StyledTableCell align="left">%&nbsp;</StyledTableCell>
                </TableRow>
              </TableHead>
              <input type="text" name="group" placeholder="Filter Titles" style={{
                            width: "200px",
                            padding: "8px 10px",
                            margin: "8px 0",
                            boxSizing: "border-box"
                        }} />
                        <br/>
              <TableBody>
                {detailData.map((row) => (
                  <TableRow  >
                    <TableCell align="left">{row.Title}</TableCell>
                    <TableCell align="left">{row.Duration}</TableCell>
                    <TableCell align="left">{row.Percent}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </div>
        )}
        </Grid>
      </Grid>
    </div>
  );
}

export default TopWebsites
