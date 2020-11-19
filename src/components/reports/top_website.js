

import React,{ useState, useEffect, forwardRef, useCallback } from 'react';

import MaterialTable from "material-table";

import AddBox from "@material-ui/icons/AddBox";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Print from "@material-ui/icons/Print";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import RefreshIcon from '@material-ui/icons/Refresh';

import NativeSelect from '@material-ui/core/NativeSelect';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    
      },
    
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const TopWebsite=()=>{
    const classes = useStyles();
    

  const tableIcons={
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    Print: forwardRef((props, ref) => <Print {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };

  return (
    <div >
  
  <FormControl className={classes.formControl}>
        
        <NativeSelect
          defaultValue={0}
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
        </NativeSelect>
        
      </FormControl>

      <FormControl className={classes.formControl}>
        
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'device',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>All computers</option>
          <option value={20}>WINDOWS-5AUTJS3</option>
          <option value={30}>WINDOWS-6AUTJS34</option>
        </NativeSelect>
       
      </FormControl>

      

      <Button className={classes.formControl} variant="outlined" > <RefreshIcon  />Refresh</Button>
      
      <MaterialTable
      title="Reports "
      columns={[
        { title: "User Name", field: "username" },
        { title: "Device Name", field: "devicename" },
        { title: "Resource Name", field: "resourcename", type: "numeric" },
        {
          title: "Resource Path",
          field: "resourcepath",
        },
        {
          title: "Resource Type",
          field: "resourcetype",
        },
        {
          title: "Date ",
          field: "date",
        },  
      ]}
      data={[
        {
          username: "Melkam",
          devicename: "WINDOWS-5AUTJS3",
          resourcetype: "dox",
          resourcepath: "",
          resourcename: "doc.dox",
        },
        {
          username: "Melkam",
          devicename: "WINDOWS-5AUTJS3",
          resourcetype: "dox",
          resourcepath: "",
          resourcename: "doc.dox",
        },
      ]}
      actions={[
        {
          icon: tableIcons.Edit,
          tooltip: "Save User",
          onClick: (event, rowData) => alert("You saved " + rowData.name),
        },
        {
          icon: tableIcons.Delete,
          tooltip: "Delete User",
          onClick: (event, rowData) =>
            alert("You want to delete " + rowData.name),
        },
      ]}
    />
    </div>
    

  );

}

export default TopWebsite
