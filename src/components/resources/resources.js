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
    const [state,setState] = React.useState({
        selectedFile: null
    })
    const [file,setFile] = React.useState(null)
    const onChangeHandler = event => {
        console.log(event.target.files[0])
        setFile(
          event.target.files[0],
        )
    
    }
    const onClickHandler = () => {
        const data = new FormData()
        data.append('file', file)
        for (var key of data.entries()) {
            console.log(key[0] + ', ' + key[1]);
        }
    }
    return (
        <div className={classes.all}>
                    <input
           margin="normal"
           className={classes.input}
           type="file"
           name="file"
           onChange={onChangeHandler}
           />
                     <Button onClick={onClickHandler}>Upload File</Button>
        </div>
    )
}

export default Resource