import { combineReducers } from 'redux'
import auth from './auth'
import users from './users'
import alert from './alert'
import top_websites from './top_website_report_reducer'
import top_application from './top_application_report_reducer'
import top_files from './top_files_report_reducer'
import resource from './resources'

export default combineReducers({
    auth,
    users,
    alert,
    top_application,
    top_files,
    top_websites,
    resource
})