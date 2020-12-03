import { combineReducers } from 'redux'
import auth from './auth'
import users from './users'
import alert from './alert'
import top_websites from './top_website_report_reducer'
import top_application from './top_application_report_reducer'
import top_files from './top_files_report_reducer'
import resource from './resources'
import device from './device'
import activityLog from './activityLog'
import deviceGroup from './deviceGroup'
import deviceMembers from './deviceMembers'
export default combineReducers({
    auth,
    users,
    device,
    deviceGroup,
    deviceMembers,
    alert,
    activityLog,
    top_application,
    top_files,
    top_websites,
    resource
})