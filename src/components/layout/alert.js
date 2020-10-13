import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Slide from '@material-ui/core/Slide';

function TransitionUp(props) {
    return <Slide {...props} direction="up" />;
}
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    Snackbar: {
        backgroundColor: 'red'
    }

}));
const DisplayAlert = ({ alerts }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [state, setState] = React.useState({
        open: true,
        vertical: 'bottom',
        horizontal: 'left',
    });

    return (
        <div className={classes.root}>
            <div>

            </div>
            {alerts !== null && alerts.length > 0 && alerts.map(
                alert => (
                    <div key={alert.id}>
                        <Snackbar open={open} autoHideDuration={6000}>
                            <Alert severity={alert.alertType}>{alert.msg}</Alert>
                        </Snackbar>
                    </div>
                )
            )}
        </div>
    )
}

DisplayAlert.propTypes = {
    alerts: PropTypes.array.isRequired
}
const mapStateToProps = state => ({
    alerts: state.alert
})
export default connect(mapStateToProps)(DisplayAlert)
