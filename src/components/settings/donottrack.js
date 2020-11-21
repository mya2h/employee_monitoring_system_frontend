import React from 'react'
import { forwardRef } from 'react';
import MaterialTable from 'material-table';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import { Button, Paper, } from '@material-ui/core';
import Edit from '@material-ui/icons/Edit';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import BlockIcon from '@material-ui/icons/Block';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import Check from '@material-ui/icons/Check';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Delete from '@material-ui/icons/Delete'
import { makeStyles } from '@material-ui/core/styles';
const useStyle =  makeStyles(theme => ({
    root:{
        margin:theme.spacing(3),
        // float:"left"
    },
    table:{
        width:'70%',
        marginTop:theme.spacing(4)
    },
    pos:{
        float:"left",
        border:'1px solid #bdbdbd',
        borderRadius:'4px',
        textTransform: 'capitalize',
    },
    button: {
        float: "left",
        background: "#1976d2",
        '&:hover': {
            background: "#447fb9",
        },
        color: "#ffffff",
        marginLeft: "12px",
        marginBottom: "12px",
        textTransform: 'capitalize',
    },
    cancelButton: {
        float: "left",
        background: "#f55753",
        '&:hover': {
            background: "#fc7573",
        },
        color: "#ffffff",
        marginLeft: "12px",
        marginBottom: "12px",
        textTransform: 'capitalize',
    },
}))
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
    Filter: forwardRef((props, ref) => {}),
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

const DoNotTrack = ()=> {
    const classes = useStyle()
    const [checked, setChecked] = React.useState([0]);
    const [open, setOpen] = React.useState(false);
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
    const [state,setState] = React.useState({
        columns:[
            { title: 'Device Name', field: 'deviceName' },
            { title: 'User', field: 'user' },
        ],
        data:[
            { deviceName: 'HP 234',user:"Kalkidan" },
            { deviceName: 'Lenovo 123',user:"Melkams" },
            { deviceName: 'HP 234',user:"Studows" },
            { deviceName: 'Lenovo 123',user:"Kalkidan" },
            { deviceName: 'Mac book pro',user:"macuser12" },
            { deviceName: 'HP123q',user:"kalse" },
            { deviceName: 'HP 234',user:"Kalkidan" },
        ]
    })
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
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
    return(
        <div className = {classes.root}>
            <div className={classes.pos}>
            <Button onClick={handleClickOpen} >Add Users</Button>
            </div>
        <br/>
            <div   className={classes.table}>
            <MaterialTable  
          title=""
          columns={state.columns}
        
          data={state.data}
          options={{
            headerStyle: { backgroundColor:'rgba(221, 221, 221, 0.863)' },
            toolbar: false,
            search: false,
            filtering:true
          }}
          icons={tableIcons}
        />
            </div>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                Add user to the Do Not Track List
        </DialogTitle>
                <DialogContent dividers>
                    <Card variant="outlined">
                        <CardActions className={classes.actions}>
                           Users List
                            </CardActions>
                        <CardContent>
                            <List aria-label="contacts">
                                {listItems.map(value => (
                                    <ListItem button className={classes.list} key={value} onClick={handleToggle(value)}>
                                        <ListItemIcon className={classes.listIcon}>
                                            <Checkbox
                                                 edge="start"
                                                 checked={checked.indexOf(value) !== -1}
                                                 tabIndex={-1}
                                                 disableRipple
                                                //  inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText > <div className={classes.listProp}>{value.name}</div> </ListItemText>
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>

                    </Card>

                </DialogContent>
                <DialogActions>
                    <Button elevation={0} onClick={handleClose} color="primary" className={classes.button} style={{ width: "400px",height:"80" }}>
                        Save
          </Button>
                    <Button elevation={0} onClick={handleClose} color="primary" className={classes.cancelButton} style={{ width: "400px",height:"80" }}>
                        Cancel
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
export default DoNotTrack