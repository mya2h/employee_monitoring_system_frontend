import React, { useEffect } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Button, Paper, } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import GroupIcon from '@material-ui/icons/Group';
import Container from '@material-ui/core/Container';
import RemoveIcon from '@material-ui/icons/Remove';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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
import {addSuspiciousActivities,getSuspiciousActivitiesFilesById,getSuspiciousActivities,addSuspiciousFiles,getSuspiciousActivitiesFiles} from '../../actions/activities'
import { getDeviceList } from '../../actions/devices';
const useStyles = makeStyles((theme) => ({
    root: {
        // // maxHeight: "500px",
        // minHeight: "500px",
        backgroundColor: theme.palette.background.paper,
        flexGrow: 1,
        height: '450px',
        overflow: 'auto',
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
    remove: {
        color: "#f55753",
        textTransform: 'capitalize',
        // marginLeft: "2px"
    },
    active: {
        backgroundColor: "red"
    },
    formControl: {
        marginRight: theme.spacing(3),
        // marginBottom: theme.spacing(8),
        minWidth: 120,
        float: "left"

    },
    select: {
        height: "5vh"
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
    suspicious:{
        marginTop:theme.spacing(5)
    },
    label:{
        fontSize:'13px',
        marginTop:'-12px'
    }

}));
const SuspiciousActivities = ({addSuspiciousActivities,getSuspiciousActivitiesFilesById,getSuspiciousActivitiesFiles,addSuspiciousFiles,getDeviceList,device: { deviceList, loading },getSuspiciousActivities,suspicious:{suspiciousActivity},suspiciousFiles:{suspiciousFile}}) => {
    useEffect(() => {
        getDeviceList()
        getSuspiciousActivities()
    }, [])
    const classes = useStyles();
    const [checked, setChecked] = React.useState([0]);
    const [groupView, setGroupView] = React.useState(false)
    const [activtyType,setActvityType] = React.useState('application')
    const [file,setFile] = React.useState('')
    const [device,setDevice] = React.useState('')
    const [childList, setChildList] = React.useState(["Toshiba 23CSD", "Dell 23CSD", "Kal 23CSD"])
    const [compUserDetail, setCompUserDetail] = React.useState([])
    const [website,setWebsite] = React.useState({
        title:''
    })
    const [app,setApp] = React.useState({
        app:''
    })
    const [menu,setMenu] = React.useState('applications')
    const [open, setOpen] = React.useState(false);
    const [selectedIndex, setSelected] = React.useState()
    const [selectedComp, setSelectedComp] = React.useState(null)
    const handleClickOpen = () => {
        // console.log(listItems[selectedIndex])
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleClick = (event, index) => {
        setChildList(event.deviceList)
        setSelected(index);
        setSelectedComp(null)
        setCompUserDetail([])
        console.log("detail")
        getSuspiciousActivitiesFilesById(event._id)
    }
    const handleGroupView = () => {
        setGroupView(true)
    }
    const handleGroupViewClose = () => {
        setGroupView(false)
    }
    const handleComputerUser = (index) => {
        setSelectedComp(index)
        setSelected(null)
        // setCompUserDetail(compuserList[index].deviceList)
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

        setChecked(newChecked);
    };
    const handleChange = (event) =>{
        console.log(event.target.value)
        setMenu(event.target.value)
        getSuspiciousActivitiesFiles()
    }
    const handleActivityRemove = (data) =>{
        console.log(data)
    }
    const handleActivityType = (event) =>{
        console.log(event.target.value)
        setActvityType(event.target.value)
    }
    const handleDevice = (event) =>{
        setDevice(event.target.value)
        console.log(event.target.value)
    }
    const handleSuspiciousWebsites = (event)=>{
        setWebsite({title:event.target.value})
    }
    const handleSuspiciousApplications = (event)=>{
        setApp({app:event.target.value})
    }
    const handleSuspiciousFiles = (event)=>{
        setFile(event.target.value)
    }
    const handleSuspciousSubmit = (event) =>{
        event.preventDefault()
        if(activtyType == 'application'){
            console.log("app",app)
            addSuspiciousActivities(app)
        }
        if(activtyType == 'websites'){
            console.log("my value",website)
            addSuspiciousActivities(website)
        }
        if(activtyType == 'files'){
            const value = {
                deviceId:device,
                file:file
            }
            addSuspiciousFiles(value)
        }
    }
    return (
        <div className={classes.all}>
            <div className={classes.top}>
                <Button elevation={0} className={classes.button}  onClick={handleClickOpen}>Add Suspicious Activities</Button>
            </div>
            <br />
            <Grid container spacing={2}>
                <Grid xs={6}>
                    <CssBaseline />
                    <Container maxWidth="sm" >
                        <Card variant="outlined">
                            <CardActions className={classes.actions}>
                                Device List
                            </CardActions>
                            <CardContent className={classes.root}>
                                <List size="small" component="nav" className={classes.root} aria-label="contacts">
                                    {deviceList !== null && menu === "files" && deviceList.length !=0 && deviceList.map((data,index)=>(
                                                     <ListItem button
                                                     selected={selectedIndex === index}
                                                     classes={{ selected: classes.selected }}
                                                     className={classes.tableRow}
                                                     onClick={() => handleClick(data, index)}>
                                                     <ListItemIcon className={classes.tableCell}>
                                                         <GroupIcon />
         
                                                     </ListItemIcon>
                                                     <ListItemText > <div className={classes.listProp}>{data.userName}</div> </ListItemText>
         
                                                 </ListItem>
                                    ))}
                                        {deviceList !== null && menu !="files" && deviceList.length !=0 && deviceList.map((data,index)=>(
                                                     <ListItem 
                                                     classes={{ selected: classes.selected }}
                                                     className={classes.tableRow}
                                                >
                                                     <ListItemIcon className={classes.tableCell}>
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
                <Grid xs={6}>

                    <Container maxWidth="sm" >
                        <Card variant="outlined">
                            <CardActions className={classes.actions}>
                                Registered Suspicious Activities
                            </CardActions>
                            <CardContent className={classes.root} >
                                <div >
                                    <FormControl variant="outlined" className={classes.formControl} >
                                        <Select
                                            value={menu}
                                            onChange={handleChange}
                                            className={classes.select}
                                            variant="outlined"
                                            inputProps={{
                                                name: 'date',
                                                id: 'uncontrolled-native',
                                            }}
                                        >
                                            {/* <option value='all'>All</option> */}
                                            <option value='applications'>Applications</option>
                                            <option value='files'>Files</option>
                                            <option value='websites'>Websites</option>
                                        </Select>
                                    </FormControl>

                                    <br />
                                    <List className = {classes.suspicious} size="small" component="nav" aria-label="contacts">
                                        {menu === 'applications' && (
                                            <div>
                                                 {suspiciousActivity.length != 0 && suspiciousActivity != null && suspiciousActivity.map(data => (
                                            <div>
                                                {data.app && (
                                                         <ListItem button className={classes.list}>
                                                
                                                <ListItemText > <div className={classes.listProp}>{data.app}</div> </ListItemText>
                                                <ListItemSecondaryAction><IconButton onClick= {() =>{handleActivityRemove(data)}}><RemoveIcon className={classes.remove} /></IconButton></ListItemSecondaryAction>
                                            </ListItem>
                                                )}
                                            </div>
                                       
                                        ))}
                                            </div>
                                        )}
                                         {menu === 'websites' && (
                                            <div>
                                                 {suspiciousActivity.length != 0 && suspiciousActivity != null && suspiciousActivity.map(data => (
                                            <div>
                                                {data.title && (
                                                         <ListItem button className={classes.list}>
                                                
                                                <ListItemText > <div className={classes.listProp}>{data.title}</div> </ListItemText>
                                                <ListItemSecondaryAction><IconButton onClick= {() =>{handleActivityRemove(data)}}><RemoveIcon className={classes.remove} /></IconButton></ListItemSecondaryAction>
                                            </ListItem>
                                                )}
                                            </div>
                                       
                                        ))}
                                            </div>
                                        )}
                                        {menu === 'files' && (
                                            <div>
                                                {suspiciousFile.length !=0 && suspiciousFile!= null && suspiciousFile.map(data=>
                                                   <ListItem button className={classes.list}>
                                                
                                                   <ListItemText > <div className={classes.listProp}>{data.file}</div> </ListItemText>
                                                   <ListItemSecondaryAction><IconButton onClick= {() =>{handleActivityRemove(data)}}><RemoveIcon className={classes.remove} /></IconButton></ListItemSecondaryAction>
                                               </ListItem>
                                           )
                                                     }
                                            </div>
                                        )}
                                    </List>
                                </div>
                            </CardContent>

                        </Card>
                    </Container>
                </Grid>
            </Grid>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <form onSubmit = {handleSuspciousSubmit}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add Suspicious Activity
        </DialogTitle>
                <DialogContent dividers>
                    <Card variant="outlined">
                        <CardActions className={classes.actions}>
                        </CardActions>
                        <CardContent >
                            {activtyType === 'files' && (
                                <FormControl variant="outlined" className={classes.formControl} >
                                       <InputLabel id="demo-simple-select-label" className={classes.label}>Select Device</InputLabel>
                                <Select
                                    className={classes.select}
                                    onChange = {handleDevice}
                                    variant="outlined"
                                    inputProps={{
                                        name: 'date',
                                        id: 'uncontrolled-native',
                                    }}
                                >
                                    {deviceList.map(data=>(
                                         <option value={data._id}>{data.userName}</option>
                                    ))}
                                   
                                    {/* <option value='files'>Files</option>
                                    <option value='websites'>Websites</option> */}
                                </Select>
                            </FormControl>
                            ) }
                            <FormControl variant="outlined" className={classes.formControl} >
                                <Select
                                    defaultValue={activtyType}
                                    className={classes.select}
                                    onChange = {handleActivityType}
                                    variant="outlined"
                                    inputProps={{
                                        name: 'date',
                                        id: 'uncontrolled-native',
                                    }}
                                >
                                    <option value='application'>Applications</option>
                                    <option value='websites'>Websites</option>
                                    <option value='files'>Files</option>
                                </Select>
                            </FormControl>
                            {/* <br/> */}
                        
                            {activtyType === 'application' && (
                                         <TextField
                                         variant="outlined"
                                         margin="normal"
                                         required
                                         fullWidth
                                         onChange = {handleSuspiciousApplications}
                                         label="Please Enter The Application Name"
                                         name="appName"
                                     />
                            )}
                              {activtyType === 'websites' && (
                                         <TextField
                                         variant="outlined"
                                         margin="normal"
                                         onChange = {handleSuspiciousWebsites}
                                         required
                                         fullWidth
                                         label="Please Enter The URL"
                                         name="url"
                                     />
                            )}
                              {activtyType === 'files' && (
                                         <TextField
                                         variant="outlined"
                                         margin="normal"
                                         onChange = {handleSuspiciousFiles}
                                         required
                                         fullWidth
                                         label="Please Enter The File Path"
                                         name="path"
                                     />
                            )}
                        </CardContent>
                    </Card>

                </DialogContent>
                <DialogActions>
                    <Button elevation={0} type="submit" color="primary" className={classes.button} style={{ width: "400px", height: "80" }}>
                        Add
          </Button>
                    <Button elevation={0} onClick={handleClose} color="primary" className={classes.cancelButton} style={{ width: "400px", height: "80" }}>
                        Cancel
          </Button>
                </DialogActions>
                </form>
            </Dialog>
        </div>
    )
}
SuspiciousActivities.propTypes = {
    getDeviceList: PropTypes.func.isRequired,
    device: PropTypes.object.isRequired,
    addSuspiciousActivities:PropTypes.func.isRequired,
    getSuspiciousActivities:PropTypes.func.isRequired,
    getSuspiciousActivitiesFiles:PropTypes.func.isRequired,
    addSuspiciousFiles:PropTypes.func.isRequired,
    suspicious:PropTypes.object.isRequired,
    suspiciousFiles:PropTypes.object.isRequired,
    getSuspiciousActivitiesFilesById:PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    device: state.device,
    suspicious: state.suspicious,
    suspiciousFiles:state.suspiciousFiles
})
export default connect(mapStateToProps, {getDeviceList,getSuspiciousActivitiesFilesById,getSuspiciousActivitiesFiles,addSuspiciousFiles,getSuspiciousActivities,addSuspiciousActivities})(SuspiciousActivities)
