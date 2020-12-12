import React, { useEffect } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Button, Paper, } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import MaterialTable from 'material-table';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { forwardRef } from 'react';
import GroupIcon from '@material-ui/icons/Group';
import Container from '@material-ui/core/Container';
import Check from '@material-ui/icons/Check';
import BlockIcon from '@material-ui/icons/Block';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import ViewColumn from '@material-ui/icons/ViewColumn';
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
import { getDeviceList } from '../../actions/devices';
import {addNewGroup,getDeviceGroupList,addGroupMember,getDeviceMembers,updateGroup,deleteCategory,deleteMember} from '../../actions/category'

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
    root: {
        // maxHeight: "500px",
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
const Categories = ({ getDeviceList,addGroupMember,updateGroup,getDeviceMembers,getDeviceGroupList,addNewGroup,device: { deviceList, loading },deviceGroup:{groups},deviceMembers:{members} }) => {
    useEffect(() => {
        getDeviceList()
        getDeviceGroupList()
    }, [])
    const classes = useStyles();
    const [checked, setChecked] = React.useState([]);
    const [selectedMember,setSelectedMember] = React.useState([])
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
    const [childList, setChildList] = React.useState([])
    const [compUserDetail, setCompUserDetail] = React.useState([])
    const [open, setOpen] = React.useState(false);
    const [deleteOpen, setDeleteOpen] = React.useState(false)
    const [selectedIndex, setSelected] = React.useState(null)
    const [selectedComp, setSelectedComp] = React.useState(0)
    const [idForDelete,setIdForDelete] = React.useState('')
    const [selectedForEdit, setSelectedForEdit] = React.useState(null)
    const [newGroup, setNewGroup] = React.useState({categoryName:''})
    const [selectedCategory,setSelectedCategory] = React.useState('')
    const [deviceMember,setDeviceMember] = React.useState({
        deviceId:[]
    })
    const [groupEdit,setGroupEdit] = React.useState({
        categoryName:'',
        id:''
    })
    const handleClickOpen = () => {
        setOpen(true);
        console.log(selectedCategory);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleClick = (event, index) => {
        getDeviceMembers(event._id)
        console.log(event)
        setSelectedCategory(event._id)
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
        setNewGroup({categoryName:e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newGroup)
        addNewGroup(newGroup)
        setNewGroup({categoryName:''})
    }
    const handleMemberSubmit = () => {
        console.log("it is working")
        console.log(selectedMember)
        console.log(selectedCategory)
        console.log(deviceMember)
        addGroupMember(selectedCategory,deviceMember)
    }
    const handleDeleteClose = () => {
        setDeleteOpen(false)
    }
    const handleDeleteOpen = (data) => {
        setIdForDelete(data._id)
        setDeleteOpen(true)
    }
    const handleDeleteCategory = () => {
        console.log(idForDelete)
        let promise = new Promise(resolve => {
            deleteCategory(idForDelete)
            setTimeout(() => {
                getDeviceGroupList()
            }, 600);
        })
        setDeleteOpen(false)
    }
    const handleEdit = (value, index) => {
        setSelectedForEdit(index)
        setSelected(index);
        setSelectedComp(null)
        setCompUserDetail([])
        // getDeviceMembers(value._id)
    }
    const handleConfirm = ()=>{
        console.log(groupEdit)
        let promise = new Promise(resolve => {
            updateGroup(groupEdit)
            setTimeout(() => {
                getDeviceGroupList()
            }, 600);
        })
        setSelectedForEdit(null)
    }
    const handleCancel = ()=>{
        setSelectedForEdit(null)
    }
    const handleGroupChange =(e,data)=>{
        console.log(data)
        console.log(e.target.value)
        setGroupEdit({...groupEdit,id:data._id,categoryName:e.target.value})
    }
    const handleMemberRemove = (data)=>{
        console.log("removed")
        let promise = new Promise(resolve => {
            deleteMember(data)
            setTimeout(() => {
                getDeviceMembers(selectedCategory)
            }, 600);
        })
    }
    const handleMemberSelection = (row)=>{
        console.log(row)
        const member = []
        row.map(data=>{
            member.push(data._id)
        })
        setSelectedMember(member)
        setDeviceMember({deviceId:member})
        console.log(selectedMember)
    }
    console.log("kal", groups)
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
                            value={newGroup.categoryName}
                            name="categoryName" placeholder="Group Name" style={{
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
                                    {groups != null && groups.length != 0 && groups.map((data, index) => (
                                        <ListItem button
                                            selected={selectedIndex === index}
                                            classes={{ selected: classes.selected }}
                                            className={classes.tableRow}
                                            onClick={() => handleClick(data, index)}>
                                            {index === selectedForEdit && (
                                                <div >
                                                    <ListItemIcon className={classes.tableCell} style={{ float: 'left' }}>
                                                        <GroupIcon />

                                                    </ListItemIcon>
                                                    <ListItemText style={{ float: 'left' }}>                      <input type="text"
                                                        onChange={(e)=>{handleGroupChange(e,data)}}
                                                        defaultValue={data.categoryName}
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
                                                    <ListItemText style={{ float: 'left' }}> <div className={classes.listProp}>{data.categoryName}</div> </ListItemText>
                                                    <ListItemSecondaryAction style={{ float: 'left' }}>
                                                        <IconButton onClick={() => handleEdit(data, index)}><Edit className={classes.editButton} /></IconButton>
                                                        <IconButton onClick={() => handleDeleteOpen(data)}><Delete className={classes.remove} /></IconButton>

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
                                    {members.length != 0 && members != null && selectedIndex != null && members.map(data => (
                                        <ListItem button className={classes.list}>
                                            <ListItemIcon className={classes.listIcon}>
                                                <GroupIcon />
                                            </ListItemIcon>
                                            <ListItemText > <div className={classes.listProp}>{data.userName}</div> </ListItemText>
                                            <ListItemSecondaryAction>
                                                <IconButton onClick ={() =>handleMemberRemove(data._id)}><Delete className={classes.remove} /></IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    ))}
                                    {members.length === 0 && selectedComp != 0 &&(
                                        <div>
                                            No Members Found
                                        </div>
                                    ) }
                                    {selectedComp === 0  && deviceList.map(data => (
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
                            icons={tableIcons}
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
                            onSelectionChange={(rows) => handleMemberSelection(rows)}
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
                    <Button onClick={handleDeleteCategory} color="primary" className={classes.remove}>
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
    device: PropTypes.object.isRequired,
    addNewGroup:PropTypes.func.isRequired,
    getDeviceGroupList:PropTypes.func.isRequired,
    deviceGroup:PropTypes.object.isRequired,
    getDeviceMembers:PropTypes.func.isRequired,
    deviceMembers:PropTypes.object.isRequired,
    updateGroup:PropTypes.func.isRequired,
    addGroupMember:PropTypes.func.isRequired
    // deleteCategory:PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    device: state.device,
    deviceGroup:state.deviceGroup,
    deviceMembers:state.deviceMembers
})
export default connect(mapStateToProps, {addGroupMember,addNewGroup,updateGroup,getDeviceMembers,getDeviceList,getDeviceGroupList })(Categories)

