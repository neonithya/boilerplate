import { Resource } from '../../presentation'
import { REQUEST_UPDATE_DATA} from './action'

const UserUpdateRequestReduceer = (initialState = Resource.none, action) => {
  switch (action.type) {
    case REQUEST_UPDATE_DATA.MAKE_REQUEST:
      return Resource.loading()

    case REQUEST_UPDATE_DATA.REQUEST_UPDATE_DATA_SUCCESS:
      return Resource.success({
        data: action
      })

    case REQUEST_UPDATE_DATA.REQUEST_UPDATE_DATA_FAILURE:
      return Resource.error({
        error: 'User Not logged in'
      })
    default:
      return initialState
  }
}
export default UserUpdateRequestReduceer
