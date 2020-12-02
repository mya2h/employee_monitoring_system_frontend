import React, { useEffect } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Button, Paper, } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import MaterialTable from 'material-table';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GroupIcon from '@material-ui/icons/Group';
import Container from '@material-ui/core/Container';
import Check from '@material-ui/icons/Check';
import BlockIcon from '@material-ui/icons/Block';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
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
import { getDeviceList } from '../../actions/devices'
const useStyles = makeStyles((theme) => ({
    root: {
        maxHeight: "500px",
        minHeight: "500px",
        backgroundColor: theme.palette.background.paper,
    },
    all: {
        paddingTop: theme.spacing(2)
    },
    tableRow: {
        "&$selected, &$selected:hover": {
            backgroundColor: "#1a2038a1",
            color: '#ffffff'
        },
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
    list: {
        height: "90%",
    },
    listProp: {
        fontSize: "14px"
    },
    actions: {
        height: 50,
        backgroundColor: 'rgba(221, 221, 221, 0.863)',
    },
    table: {
        minHeight: "400px"
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
    editButton: {
        float: "left",
        color: "#5a98d6",
        marginLeft: "12px",
        marginRight: "2px",
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
    paper: {
        minWidth: "900px",
        minHeight: "580px"
    },
    remove: {
        color: "#f55753",
        textTransform: 'capitalize',
        marginLeft: "2px"
    },
    active: {
        backgroundColor: "red"
    },
    groupButton: {
        float: 'left',
        paddingRight: "2px"
    },
    top: {
        paddingBottom: "21px"
    },
    gridProp: {

    },
    addGroup: {
        float: "left",
        marginLeft: theme.spacing(4)
    },
    title: {
        float: "left"
    },
    space: {
        marginRight: 100
    },
    check: {
        color: "rgb(74, 184, 169)",
        backgroundColor: "#ffffff"
    },
    block: {
        color: "rgb(80, 80, 80)",
        backgroundColor: "#ffffff"
    }

}));
const Categories = ({ getDeviceList, device: { deviceList, loading } }) => {
    useEffect(() => {
        getDeviceList()
    }, [])
    const classes = useStyles();
    const [checked, setChecked] = React.useState([]);
    const [groupView, setGroupView] = React.useState(false)
    const columns = [
        { field: 'deviceName', title: 'Device name', width: 130 },
        { field: 'userName', title: 'User name', width: 130 },
    ];
    const [compuserList, setCompUserList] = React.useState([
        {
            deviceList: ["Toshiba 23CSD", "Dell 23CSD", "Kal 23CSD", "Abdak 2344"]
        },
        {
            deviceList: ["MAC 23CSD", "Toshiba 23CSD", "Dell 23CSD", "Lenovo 12"]
        },
    ])
    const [listItems, SetListItems] = React.useState([
        {
            name: "Office1 laptops",
            deviceList: [
                {
                    userName:"Toshiba 23CSD"
                },
                {
                    userName:"Dell 23CSD"
                },
                {
                    userName:"Kal 23CSD"
                }
            ]
        },
        {
            name: "Office2 laptops",
            deviceList: [
                {
                    userName:"Toshiba kal"
                },
                {
                    userName:"Dell wea"
                },
                {
                    userName:"Kal 23CSD"
                }
            ]
        },
        {
            name: "Office3 laptops",
            deviceList: [
                {
                    userName:"bagf 23CSD"
                },
                {
                    userName:"Dell 23CSD"
                },
                {
                    userName: "Kal 23CSD"
                }
            ]
        },
        {
            name: "Office4 laptops",
            deviceList: [
                {
                    userName:"12wea 23CSD"
                },
                {
                    userName:"Dell 23CSD"
                },
                {
                    userName:"Kal 23CSD"
                }
            ]
        }
    ])
    const [childList, setChildList] = React.useState([])
    const [compUserDetail, setCompUserDetail] = React.useState([])
    const [open, setOpen] = React.useState(false);
    const [deleteOpen, setDeleteOpen] = React.useState(false)
    const [selectedIndex, setSelected] = React.useState(null)
    const [selectedComp, setSelectedComp] = React.useState(0)
    const [selectedForEdit, setSelectedForEdit] = React.useState(null)
    const [newGroup, setNewGroup] = React.useState('')
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleClick = (event, index) => {
        setChildList(event)
        setSelected(index);
        setSelectedComp(null)
        setCompUserDetail([])
    }
    const handleGroupView = () => {
        setGroupView(true)
    }
    const handleGroupViewClose = () => {
        setGroupView(false)
    }
    const handleComputerUser = (index) => {
        setSelectedComp(index)
        setSelectedForEdit(null)
        setSelected(null)
        setCompUserDetail(compuserList[index].deviceList)
        setChildList([])
    }
    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        console.log(newChecked)
        setChecked(newChecked);
        console.log(value)
        console.log(checked)
    };
    const handleCheckAll = () => {
        setChecked(deviceList)
    }
    const handleChange = (e) => {
        console.log(e.target.value)
        setNewGroup(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newGroup)
        setNewGroup('')
    }
    const handleMemberSubmit = () => {
        console.log("it is working")
        console.log(checked)
    }
    const handleDeleteClose = () => {
        setDeleteOpen(false)
    }
    const handleDeleteOpen = () => {
        setDeleteOpen(true)
    }
    const handleEdit = (value, index) => {
        setSelectedForEdit(index)
        setSelected(index);
        setSelectedComp(null)
        setCompUserDetail([])
        setChildList(value.deviceList)
    }
    const handleConfirm = ()=>{
        setSelectedForEdit(null)
    }
    const handleCancel = ()=>{
        setSelectedForEdit(null)
    }
    const handleGroupChange =(e,data)=>{
        console.log(data)
    }
    const handleMemberRemove = ()=>{
        console.log("removed")
    }
    return (
        <div className={classes.all}>
            {groupView == false && (
                <div className={classes.top}>
                    <Button elevation={0} className={classes.button} onClick={handleGroupView}>Add New Group</Button>
                    <Button elevation={0} className={classes.button} disabled={selectedIndex == null} onClick={handleClickOpen}>Add Member</Button>
                </div>
            )}
            <br />
            {groupView == true && (
                <div className={classes.addGroup}>
                    <div className={classes.title}>Add New Group</div>

                    <form onSubmit={handleSubmit}>
                        <input type="text"
                            onChange={handleChange}

                            name="group" placeholder="Group Name" style={{
                                width: "400px",
                                padding: "8px 10px",
                                margin: "8px 0",
                                boxSizing: "border-box"
                            }} />
                        <br />
                        <div className={classes.groupButton}>
                            <Button elevation={0} type="submit" className={classes.button}>
                                Add
          </Button>
                            <Button elevation={0} onClick={handleGroupViewClose} className={classes.cancelButton}>
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
                                    <ListItem button
                                        selected={selectedComp === 0}
                                        classes={{ selected: classes.selected }}
                                        className={classes.tableRow}
                                        onClick={() => handleComputerUser(0)}
                                    >
                                        <ListItemIcon className={classes.tableCell}>
                                            <GroupAddIcon />
                                        </ListItemIcon>
                                        <ListItemText > <div className={classes.listProp}>All Users</div> </ListItemText>
                                    </ListItem>
                                    {listItems != null && listItems.length != 0 && listItems.map((data, index) => (
                                        <ListItem button
                                            selected={selectedIndex === index}
                                            classes={{ selected: classes.selected }}
                                            className={classes.tableRow}
                                            onClick={() => handleClick(data.deviceList, index)}>
                                            {index === selectedForEdit && (
                                                <div >
                                                    <ListItemIcon className={classes.tableCell} style={{ float: 'left' }}>
                                                        <GroupIcon />

                                                    </ListItemIcon>
                                                    <ListItemText style={{ float: 'left' }}>                      <input type="text"
                                                        onChange={(e)=>{handleGroupChange(e,data)}}
                                                        defaultValue={data.name}
                                                        name="group" placeholder="Group Name" style={{
                                                            width: "200px",
                                                            padding: "8px 10px",
                                                            margin: "8px 0",
                                                            boxSizing: "border-box"
                                                        }} /></ListItemText>
                                                    <ListItemSecondaryAction style={{ float: 'left' }}>
                                                        <IconButton onClick= {handleConfirm}><Check className={classes.check} /></IconButton>
                                                        <IconButton onClick = {handleCancel}><BlockIcon className={classes.block} /></IconButton>

                                                    </ListItemSecondaryAction>
                                                </div>
                                            )}
                                            {index != selectedForEdit && (
                                                <div >
                                                    <ListItemIcon className={classes.tableCell} style={{ float: 'left' }}>
                                                        <GroupIcon />

                                                    </ListItemIcon>
                                                    <ListItemText style={{ float: 'left' }}> <div className={classes.listProp}>{data.name}</div> </ListItemText>
                                                    <ListItemSecondaryAction style={{ float: 'left' }}>
                                                        <IconButton onClick={() => handleEdit(data, index)}><Edit className={classes.editButton} /></IconButton>
                                                        <IconButton onClick={handleDeleteOpen}><Delete className={classes.remove} /></IconButton>

                                                    </ListItemSecondaryAction>
                                                </div>
                                            )}

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
                                    {childList.length != 0 && childList != null && childList.map(data => (
                                        <ListItem button className={classes.list}>
                                            <ListItemIcon className={classes.listIcon}>
                                                <GroupIcon />
                                            </ListItemIcon>
                                            <ListItemText > <div className={classes.listProp}>{data.userName}</div> </ListItemText>
                                            <ListItemSecondaryAction>
                                                <IconButton onClick ={handleMemberRemove}><Delete className={classes.remove} /></IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    ))}
                                    {childList.length === 0  && deviceList.map(data => (
                                        <ListItem button className={classes.list}>
                                            <ListItemIcon className={classes.listIcon}>
                                                <GroupIcon />
                                            </ListItemIcon>
                                            <ListItemText > <div className={classes.listProp}>{data.userName}</div> </ListItemText>

                                        </ListItem>
                                    ))}
                                </List>
                            </CardContent>

                        </Card>
                    </Container>
                </Grid>
            </Grid>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" classes={{ paper: classes.paper }} open={open}>
                <Container >
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                        Add Group Members
        </DialogTitle>

                    <DialogContent dividers>

                        <MaterialTable
                            title=""
                            columns={columns}
                            data={deviceList}
                            classes={{ table: classes.table }}
                            options={{
                                search: false,
                                selection: true,
                                filtering: true,
                                toolbar: false,
                                paging: true,
                                pageSize: 5,
                                emptyRowsWhenPaging: true,
                                pageSizeOptions: [8, 16, 24, 50],
                                cellStyle: {
                                    maxHeight: "7px"
                                },
                                rowStyle: {
                                    height: "5px",
                                    color: "#a8a8a8",
                                    maxHeight: "3px"
                                },
                                headerStyle: {
                                    backgroundColor: "#f0f0f0"
                                }
                            }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button elevation={0} onClick={handleMemberSubmit} color="primary" className={classes.button} style={{ width: "400px", height: "80" }}>
                            Create Group
          </Button>
                        <Button elevation={0} onClick={handleClose} color="primary" className={classes.cancelButton} style={{ width: "400px", height: "80" }}>
                            Cancel
          </Button>
                    </DialogActions>
                </Container>
            </Dialog>
            <Dialog
                open={deleteOpen}
                onClose={handleDeleteClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete the group? This cannot be undone.
          </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteClose} color="primary" className={classes.remove}>
                        Delete
          </Button>
                    <Button onClick={handleDeleteClose} color="primary" autoFocus className={classes.block}>
                        Cancel
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
Categories.propTypes = {
    getDeviceList: PropTypes.func.isRequired,
    device: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    device: state.device
})
export default connect(mapStateToProps, { getDeviceList })(Categories)

