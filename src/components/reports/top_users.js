import React from 'react'
import { makeStyles,withStyles  } from '@material-ui/core/styles';
import { Button, Paper, } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import GroupIcon from '@material-ui/icons/Group';
import Container from '@material-ui/core/Container';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// const ListItem = withStyles({
//     root: {
//       "&$selected": {
//         backgroundColor: "red",
//         color: "white"
//       },
//       "&$selected:hover": {
//         backgroundColor: "purple",
//         color: "white"
//       },
//       "&:hover": {
//         backgroundColor: "blue",
//         color: "white"
//       }
//     },
//     selected: {}
//   })(MuiListItem);
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
const TopUsers = () => {
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
                    <Button elevation={0} className={classes.button} onClick={handleGroupView}>Add New Group</Button>
                    <Button elevation={0} className={classes.button} onClick={handleClickOpen}>Add Member</Button>
                </div>
            )}
            <br />
            {groupView == true && (
                <div className={classes.addGroup}>
                    <div className={classes.title}>Add New Group</div>

                    <form>
                        <input type="text" name="group" placeholder="Group Name" style={{
                            width: "400px",
                            padding: "8px 10px",
                            margin: "8px 0",
                            boxSizing: "border-box"
                        }} />
                        <br />
                        <div className={classes.groupButton}>
                        <Button elevation={0} onClick={handleClose} className={classes.button}>
                            Add
          </Button>
                        <Button  elevation={0} onClick={handleGroupViewClose} className={classes.cancelButton}>
                            Cancel
          </Button>
                        </div>
                    
                    </form>


                </div>

            )}

            <Grid container spacing={2}>
                <Grid xs={6}>
                    <CssBaseline />
                    <Container maxWidth="sm" >
                        <Card className={classes.root} variant="outlined">
                            <CardActions className={classes.actions}>
                                Group Name
                            </CardActions>
                            <CardContent>
                                <List size="small" component="nav" className={classes.root} aria-label="contacts">
                                    {listItems != null && listItems.length != 0 && listItems.map((data,index )=> (
                                        <ListItem button  
                                        selected = {selectedIndex === index}
                                        className={{ selected: classes.active }}
                                        onClick={() => handleClick(data.deviceList,index)}>
                                            <ListItemIcon className={classes.listIcon}>
                                                <GroupIcon />
                                            
                                            </ListItemIcon>
                                            <ListItemText > <div className={classes.listProp}>{data.name}</div> </ListItemText>
                                            <ListItemSecondaryAction>
                                                <Edit className={classes.editButton}/>
                                                <Delete className={classes.remove}/>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    ))}
                                </List>
                            </CardContent>
                        </Card>
                    </Container>
                </Grid>
                <Grid xs={6}>

                    <Container maxWidth="sm" >
                        <Card className={classes.root} variant="outlined">
                            <CardActions className={classes.actions}>
                              Members Name
                            </CardActions>
                            <CardContent>
                            <List size="small" component="nav" className={classes.root} aria-label="contacts">
                                    {childList.length !=0 && childList !=null && childList.map(data => (
                                        <ListItem button className={classes.list}>
                                            <ListItemIcon className={classes.listIcon}>
                                                <GroupIcon />
                                            </ListItemIcon>
                                            <ListItemText > <div className={classes.listProp}>{data}</div> </ListItemText>
                                            <ListItemSecondaryAction>
                                            <Delete className={classes.remove}/>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    ))}
                                </List>  
                            </CardContent>

                        </Card>
                    </Container>
                </Grid>
            </Grid>
            <Dialog open={open}  onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create a New Group</DialogTitle>
                <DialogContent>
                <Grid container spacing={4} >
                <Grid xs={6}>
                <List size="small" component="nav" className={classes.root} aria-label="contacts">
                                    {listItems.map(value => (
                                        <ListItem button >
                                            <ListItemIcon>
                                                <Checkbox
                                                    edge="start"
                                                    checked={checked.indexOf(value) !== -1}
                                                    tabIndex={-1}
                                                    disableRipple
                                                // inputProps={{ 'aria-labelledby': labelId }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText > <div className={classes.listProp}>{value.name}</div> </ListItemText>
                                        </ListItem>
                                    ))}
                                </List>
                </Grid>
                <Grid xs={6}>
                <List size="small" component="nav" className={classes.root} aria-label="contacts">
                                    {listItems.map(value => (
                                        <ListItem button className={classes.list}>
                                            <ListItemIcon className={classes.listIcon}>
                                                <Checkbox
                                                    edge="start"
                                                    checked={checked.indexOf(value) !== -1}
                                                    tabIndex={-1}
                                                    disableRipple
                                                // inputProps={{ 'aria-labelledby': labelId }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText > <div className={classes.listProp}>{value.name}</div> </ListItemText>
                                        </ListItem>
                                    ))}
                                </List>
                </Grid>
                </Grid>
                
                </DialogContent>
                <DialogActions>
                    <Button elevation={0} onClick={handleClose} color="primary" className={classes.button}>
                        Create Group
          </Button>
                    <Button elevation={0} onClick={handleClose} color="primary" className={classes.cancelButton}>
                        Cancel
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default TopUsers