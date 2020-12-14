import React,{useEffect} from 'react'
import { forwardRef } from 'react';
import MaterialTable from 'material-table';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Paper, } from '@material-ui/core';
import Edit from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Container from '@material-ui/core/Container';
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
import { getDeviceList,doNotTrackDevice,backToTrack,getDoNotTrackList } from '../../actions/devices'


const useStyle = makeStyles(theme => ({
    root: {
        margin: theme.spacing(3),
        // float:"left"
    },
    table: {
        "& . MTableToolbar-highlight-39": {
            padding: "8px",
            color: "#000000",
            backgroundColor: "#000000"
        },
        width: '70%',
        marginTop: theme.spacing(4)
    },
    pos: {
        float: "left",
        border: '1px solid #bdbdbd',
        borderRadius: '4px',
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
    Filter: forwardRef((props, ref) => { }),
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

const DoNotTrack = ({ getDeviceList,backToTrack,doNotTrackDevice,getDoNotTrackList,doNotTrack:{notTrackedList}, device: { deviceList, loading } }) => {
    useEffect(() => {
        getDeviceList()
        getDoNotTrackList()
      }, [])
    const classes = useStyle()
    const [checked, setChecked] = React.useState([0]);
    const [open, setOpen] = React.useState(false);
    const [selectedUsers,setSelectedUser] = React.useState({deviceUserId:[]})
    const columns = [
        { field: 'deviceName', title: 'Device name', width: 130 },
        { field: 'userName', title: 'User name', width: 130 },
    ];
    const [state, setState] = React.useState({
        columns: [
            { title: 'Device Name', field: 'deviceName' },
            { title: 'User', field: 'userName' },
        ],
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
    const handleMemberSelection = (rows) =>{
        const users = []
        rows.map(data=>{
            users.push(data._id)
        })
        setSelectedUser({deviceUserId:users})
    }
    const handleSubmit = () =>{
        console.log(selectedUsers)
        doNotTrackDevice(selectedUsers)
    }
    const handleBackToTrack = (rows) =>{
        const users = []
        rows.map(data=>{
            users.push(data._id)
        })
        const devcieList = {
            deviceUserId:users
        }
        backToTrack(devcieList)
    }
    return (
        <div className={classes.root}>
            <div className={classes.pos}>
                <Button onClick={handleClickOpen} >Add Users</Button>
            </div>
            <br />
            <div className={classes.table}>
                <MaterialTable
                    title=""
                    columns={state.columns}
                    data={notTrackedList}
                    options={{
                        headerStyle: { backgroundColor: 'rgba(221, 221, 221, 0.863)' },
                        // toolbar: false,
                        search: false,
                        filtering: true,
                        selection:true
                    }}
                    actions={[
                        {
                          tooltip: 'Remove All Selected Users',
                          icon: () => <Button variant="contained" style={{
                            // color: '#ffffff', background: "rgba(65, 63, 63, 0.863)",
                            // '&:hover': {
                            //     background: "#2491c4",
                            // },
                        }}>
                            Back To Track
                          </Button>,
                          onClick: (event, rowData) => {
                           handleBackToTrack(rowData)
                          }
                        }
                      ]}
                    icons={tableIcons}
                />
            </div>
               <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" classes={{ paper: classes.paper }} open={open}>
                <Container >
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                        Add Users To Do Not Track
        </DialogTitle>

                    <DialogContent dividers>

                        <MaterialTable
                            title=""
                            columns={columns}
                            data={deviceList}
                            icons={tableIcons}
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
                            onSelectionChange={(rows) => handleMemberSelection(rows)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button elevation={0} onClick = {handleSubmit} color="primary" className={classes.button} style={{ width: "400px", height: "80" }}>
                            Save
          </Button>
                        <Button elevation={0} onClick={handleClose} color="primary" className={classes.cancelButton} style={{ width: "400px", height: "80" }}>
                            Cancel
          </Button>
                    </DialogActions>
                </Container>
            </Dialog>
        </div>
    )
}
DoNotTrack.propTypes = {
    getDeviceList: PropTypes.func.isRequired,
    device: PropTypes.object.isRequired,
    getDoNotTrackList:PropTypes.func.isRequired,
    doNotTrack:PropTypes.object.isRequired,
    backToTrack:PropTypes.func.isRequired,
    doNotTrackDevice:PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    device: state.device,
    doNotTrack:state.doNotTrack
})
export default connect(mapStateToProps, { getDeviceList,backToTrack,doNotTrackDevice,getDoNotTrackList })(DoNotTrack)

