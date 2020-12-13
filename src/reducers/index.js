import { combineReducers } from 'redux'
import {reducer as notifications} from 'react-notification-system-redux';
import auth from './auth'
import users from './users'
import alert from './alert'
import topApplication from './top_application_report_reducer'
import top_files from './top_files_report_reducer'
import resource from './resources'
import device from './device'
import activityLog from './activityLog'
import deviceGroup from './deviceGroup'
import deviceMembers from './deviceMembers'
import notification from './notification'
import topWebsites from './top_website_report_reducer'
import suspicious from './suspiciousActivities'
import suspiciousFiles from './suspiciousFile'
export default combineReducers({
    auth,
    users,
    device,
    notification,
    suspiciousFiles,
    suspicious,
    notifications,
    topWebsites,
    deviceGroup,
    deviceMembers,
    alert,
    activityLog,
    topApplication,
    top_files,
    resource
})