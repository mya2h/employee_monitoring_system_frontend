import React, { useState, useEffect, forwardRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import DateRangePicker from 'rsuite-daterangepicker';
import Grid from "@material-ui/core/Grid"
import Select from '@material-ui/core/Select';
import MaterialTable from 'material-table';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TableCell from '@material-ui/core/TableCell';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import BlockIcon from '@material-ui/icons/Block';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import Check from '@material-ui/icons/Check';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Delete from '@material-ui/icons/Delete'
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';
import Divider from '@material-ui/core/Divider';
import {getTopApplications} from '../../actions/report'
import {getDeviceList} from '../../actions/devices'
const tableIcons = {
  Check: forwardRef((props, ref) => <Check style={{
    color: '#2b94b1'
  }} {...props} ref={ref} />),
  Block: forwardRef((props, ref) => <BlockIcon style={{
    color: '#156c94'
  }} {...props} ref={ref} />),

  Delete: forwardRef((props, ref) => <Delete style={{
    color: '#e64f47',
  }} {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear style={{
    color: '#e64f47',
  }} {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit style={{
    color: '#5a98d6',
  }} {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};
const useStyles = makeStyles((theme) => ({
    table: {
    "& .MuiTableCell-root": {
      padding: "8px"
    }
  },
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
const TopApplications = ({getTopApplications,getDeviceList,device:{deviceList,loading},topApplication:{top_applications}}) => {
  useEffect(()=>{
    getTopApplications()
    getDeviceList()
  },[])
  const classes = useStyles();
  const [detailData, setDetailData] = React.useState([])
  const [data,setData] = React.useState([])
  const [selectedID, setSelectedID] = useState(0);
  const [title,setTitle] = React.useState('')
  const [app,setApp] = React.useState('')
  const onRowSelection = (index,row) =>{
    console.log(row.tableData.id)
    console.log(index)
    setDetailData(row.name)
    setSelectedID(row.tableData.id);
  }
  const handleFilterName = (event) =>{
    console.log(event.target.value)
    setApp(event.target.value)
  }
  const refreshReport= () =>{
    getTopApplications()
  }
  const handleDeviceChange = (event) =>{
    console.log(event.target.value)
  }
  return (
    <div className={classes.root}>
      <Grid container >
        <Grid item xs={12}>
          {/* <FormControl variant="outlined" className={classes.formControl} >
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

          </FormControl> */}
            {/* <DateRangePicker
      appearance="default"
      placeholder="Default"
      style={{ width: 280 }}
    /> */}

          <FormControl className={classes.formControl}  variant="outlined">

            <Select
            className={classes.select}
              defaultValue='allDevices'
              onChange = {handleDeviceChange}
              inputProps={{
                name: 'device',
                id: 'uncontrolled-native',
              }}
            >
              <option value='allDevices'>All Devices</option>
              {deviceList.length != 0 && deviceList!= null && deviceList.map((data)=>(
              <option value={data._id}>{data.userName}</option>
              ))}
              {/* <option value={20}>WINDOWS-5AUTJS3</option>
              <option value={30}>WINDOWS-6AUTJS34</option> */}
            </Select>

          </FormControl>
          <Button  className={classes.select}  variant="outlined" style={{float:"left"}} onClick ={refreshReport}>  
          <IconButton aria-label="delete" >
            <RefreshIcon fontSize="small" />
          </IconButton>Refresh</Button>

        </Grid>
        </Grid>
        <Grid container spacing={3}>
        <Divider />
        <Grid item xs={6} className={classes.table}
          style={{
            flexGrow: 1,
            height: '70vh',
            overflow: 'auto',
          }}
        >
        <MaterialTable
          title=""
          columns={[
            { title: "App", field: "app" },
            { title: "Duration", field: "duration",filtering: false },
            { title: "%", field: "percent",filtering: false },
            { title: "Date", field: "date",filtering: false },
          ]}
          data={top_applications}
          options={{
            paging:true,
            pageSize:10,  
            filtering: true,
            toolbar: false,     // make initial page size
            emptyRowsWhenPaging: true,   //to make page size fix in case of less data rows
            pageSizeOptions:[10,16,26,50],    // rows selection options    
            headerStyle:{
              backgroundColor:"rgba(221, 221, 221, 0.863",
              position: "sticky", 
              top: 0
            },
            cellStyle: {
              width: 50,
              maxWidth: 300, 
              wordWrap:'break-word'
              },
            rowStyle: rowData => ({
              backgroundColor: (selectedID === rowData.tableData.id) ? '#1a2038a1' : '#FFF',
              color:(selectedID === rowData.tableData.id) ? '#ffffff' : '#000'
            })
          }}
          onRowClick={((evt, selectedRow) => onRowSelection(evt, selectedRow))}
          icons={tableIcons}
        />
        </Grid>
        <Grid item xs={6}
        style={{
          flexGrow: 1,
          height: '70vh',
          overflow: 'auto',
        }}
        >
          <div>
          <Typography variant="h5" component="h2" style = {{marginBottom:"10px"}}>
         {title}
        </Typography>
        {top_applications.length !=0 && top_applications.length != null &&(
          <div className={classes.table}>
            <MaterialTable
          title=""
          columns={[
            { title: "Title", field: "title" },
            { title: "Duration", field: "duration",filtering: false },
            { title: "%", field: "percent",filtering: false },
          ]}
          data={top_applications[selectedID].singleVal}
          options={{
            paging:true,
            pageSize:10,  
            filtering: true,
            toolbar: false,     // make initial page size
            emptyRowsWhenPaging: true,   //to make page size fix in case of less data rows
            pageSizeOptions:[10,16,26,50],    // rows selection options   
            cellStyle: {
              width: 50,
              maxWidth: 300, 
              wordWrap:'break-word'
              }, 
            headerStyle:{
              backgroundColor:"rgba(221, 221, 221, 0.863",
              position: "sticky", 
              top: 0
            }
          }}
          icons={tableIcons}
        />
          </div>
        )}

          </div>
        {/* )} */}
        </Grid>
      </Grid>
    </div>
  );
}

TopApplications.propTypes={
  getTopApplications:PropTypes.func.isRequired,
  topApplication:PropTypes.object.isRequired,
  getDeviceList:PropTypes.func.isRequired,
  device:PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  topApplication: state.topApplication,
  device:state.device
})
export default connect(mapStateToProps,{getTopApplications,getDeviceList})(TopApplications)


