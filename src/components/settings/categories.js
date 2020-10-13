import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Paper, } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import GroupIcon from '@material-ui/icons/Group';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
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
const useStyles = makeStyles((theme) => ({
    root: {
        // width: '100%',
        maxHeight: "500px",
        minHeight: "500px",
        backgroundColor: theme.palette.background.paper,
    },
    all: {
        paddingTop: theme.spacing(5)
    },
    list: {
        height: "50%",
        padding: theme.spacing(0),
        paddingLeft: "4px"
    },
    listIcon: {
        marginRight: "-20px",

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
        float: "right",
        background: "#10cfbd",
        '&:hover': {
            background: "#1c9286",
        },
        color: "#ffffff"
    },
    remove: {
        background: "#f55753",
        '&:hover': {
            background: "#aa3b39",
        },
        color: "#ffffff"
    },

}));
const Categories = () => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([0]);
    const [listItems, SetListItems] = React.useState([
        {
            name: "Office1 laptops",
            deviceList: ["Toshiba 23CSD", "Dell 23CSD", "Kal 23CSD"]
        },
        {
            name: "Office2 laptops",
            deviceList: ["Toshiba 23CSD", "Dell 23CSD", "Kal 23CSD"]
        },
        {
            name: "Office3 laptops",
            deviceList: ["Toshiba 23CSD", "Dell 23CSD", "Kal 23CSD"]
        },
        {
            name: "Office4 laptops",
            deviceList: ["Toshiba 23CSD", "Dell 23CSD", "Kal 23CSD"]
        }
    ])
    const [childList, SetChildList] = React.useState([])
    const [open, setOpen] = React.useState(false);

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
    return (
        <div className={classes.all}>
            <Grid container spacing={2}>
                <Grid xs={6}>
                    <CssBaseline />
                    <Container maxWidth="sm" >
                        <Card className={classes.root} variant="outlined">
                            <CardActions className={classes.actions}>
                                <Button size="small" className={classes.button} onClick={handleClickOpen}>Create Group</Button>
                            </CardActions>
                            <CardContent>
                                <List size="small" component="nav" className={classes.root} aria-label="contacts">
                                    {listItems.map(data => (
                                        <ListItem button className={classes.list}>
                                            <ListItemIcon className={classes.listIcon}>
                                                <GroupIcon />
                                            </ListItemIcon>
                                            <ListItemText > <div className={classes.listProp}>{data.name}</div> </ListItemText>
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
                                <Button size="small" className={classes.button}>Add Device</Button>
                                <Button size="small" className={classes.remove} >Remove</Button>
                            </CardActions>
                            <CardContent>
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
                            </CardContent>

                        </Card>
                    </Container>
                </Grid>
            </Grid>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create a New Group</DialogTitle>
                <DialogContent>
                    <TextField
                        // autoFocus
                        // margin="dense"
                        variant="outlined"
                        id="groupName"
                        label="Group Name"
                        style={{width:"500px"}}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" className={classes.button}>
                        Create Group
          </Button>
          <Button onClick={handleClose} color="primary" className={classes.remove}>
                        Cancel
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Categories