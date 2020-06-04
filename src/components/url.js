import config from '../config/config'

const { apiURL } = config
const urlConstant = {
Account: {
Login: `${apiURL}api/Account/Login`,
Logout: `${apiURL}api/Account/Logout`,
},
Users: {
UserList: `${apiURL}api/Users/UserList`,
CreateUser: `${apiURL}api/Users/Create`,
DeleteUser: `${apiURL}api/Users/Delete`,
ExportCsv: `${apiURL}api/Users/ExportCsv`,
}
}

export { urlConstant as default }