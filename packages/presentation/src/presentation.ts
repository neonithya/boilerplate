import { Resource } from './utils/resource'
import store from './feature/store'
import { Status } from './utils/status'
import { userRequest } from './feature/login/actions'
import { userDataRequest } from './feature/userDetail/action'
import {  userGetDataRequest } from './feature/userGet/actions'
import { userUpdateDataRequest } from './feature/userUpdate/action'

export { store, Status, Resource, userRequest, userDataRequest, userUpdateDataRequest, userGetDataRequest }
