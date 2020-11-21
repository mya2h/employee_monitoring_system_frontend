import React from 'react'
import { makeStyles,withStyles  } from '@material-ui/core/styles';
import { Button, Paper, } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import RefreshIcon from '@material-ui/icons/Refresh';

import NativeSelect from '@material-ui/core/NativeSelect';


const useStyles = makeStyles((theme) => ({
    root: {
        // width: '100%',
        maxHeight: "500px",
        minHeight: "500px",
        backgroundColor: theme.palette.background.paper,
    },
    all: {
        paddingTop: theme.spacing(2) 
    },
    list: {
        height: "90%",
        // padding: theme.spacing(1),
        // paddingLeft: "4px"
    },
    listIcon: {
        // marginRight: "-20px",

    },
    listProp: {
        fontSize: "14px"
    },
    actions: {
        height: 50,
        backgroundColor: 'rgba(221, 221, 221, 0.863)',
        // width: '100%'
    },
    button: {
        float: "left",
        background: "#1976d2",
        '&:hover': {
            background: "#447fb9",
        },
        color: "#ffffff",
        marginLeft: "12px",
        marginBottom:"12px",
        textTransform: 'capitalize',
    },
    editButton:{
        float: "left",
        color: "#5a98d6",
        marginLeft: "12px",
        marginRight:"2px",
        marginBottom:"12px",
        textTransform: 'capitalize',
    },
    cancelButton:{
        float: "left",
        background: "#f55753",
        '&:hover': {
            background: "#fc7573",
        },
        color: "#ffffff",
        marginLeft: "12px",
        marginBottom:"12px",
        textTransform: 'capitalize',
    },
    remove: {
        color: "#f55753",
        textTransform: 'capitalize',
        marginLeft:"2px"
    },
    active: {
        backgroundColor: "red"
      },
    groupButton:{
        float:'left',
        paddingRight:"2px"
    },
    top: {
        paddingBottom: "21px"
    },
    gridProp:{
      
    },
    addGroup: {
        float: "left",
        marginLeft: theme.spacing(4)
    },
    title: {
        float: "left"
    }

}));
const Resource = () => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([0]);
    const [groupView, setGroupView] = React.useState(false)
    const [listItems, SetListItems] = React.useState([
        {
            name: "Office1 laptops",
            deviceList: ["Toshiba 23CSD", "Dell 23CSD", "Kal 23CSD"]
        },
        {
            name: "Office2 laptops",
            deviceList: ["Toshiba kal", "Dell wea", "Kal 23CSD"]
        },
        {
            name: "Office3 laptops",
            deviceList: ["bagf 23CSD", "Dell 23CSD", "Kal 23CSD"]
        },
        {
            name: "Office4 laptops",
            deviceList: ["12wea 23CSD", "Dell 23CSD", "Kal 23CSD"]
        }
    ])
    const [childList, SetChildList] = React.useState([])
    const [open, setOpen] = React.useState(false);
    const [selectedIndex,setSelected] = React.useState(0)
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleClick = (event,index)=>{
        SetChildList(event)
        setSelected(index);
    }
    const handleGroupView = () => {
        setGroupView(true)
    }
    const handleGroupViewClose = () => {
        setGroupView(false)
    }
    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    return (
        <div className={classes.all}>
            {groupView == false && (
                <div className={classes.top}>
                    <Button elevation={0} className={classes.button} onClick={handleGroupView}>Register Resource</Button>
                    <Button elevation={0} className={classes.button} onClick={handleClickOpen}>Add Member</Button>
                </div>
            )}
            <br />
            {groupView == true && (
                <div className={classes.addGroup}>
                    <div className={classes.title}>Upload Resource</div>

                    <form>
                        <input type="file" name="resource"  style={{
                            width: "400px",
                            padding: "8px 10px",
                            margin: "8px 0",
                            boxSizing: "border-box"
                        }} />
                        <br />
                        <div className={classes.groupButton}>
                        <Button elevation={0} onClick={handleClose} className={classes.button}>
                            Upload
          </Button>
                        <Button  elevation={0} onClick={handleGroupViewClose} className={classes.cancelButton}>
                            Cancel
          </Button>
                        </div>
                    
                    </form>
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
      

                </div>

            )}

            
        </div>
    )
}

export default Resource