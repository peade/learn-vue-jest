import axios from 'axios'

class Users {
  static all() {
    return axios.get('./users.json')
  }
}
export default Users
