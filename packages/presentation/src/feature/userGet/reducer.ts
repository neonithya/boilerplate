import { Resource } from '../../presentation'
import { REQUEST_GET_DATA} from './actions'

const UserGetRequestReduceer = (initialState = Resource.none, action) => {
  switch (action.type) {
      case REQUEST_GET_DATA.MAKE_REQUEST:
        return Resource.loading()
  
      case REQUEST_GET_DATA.REQUEST_GET_DATA_SUCCESS:
        return Resource.success({
          data: action
        })
      case REQUEST_GET_DATA.REQUEST_GET_DATA_FAILURE:
        return Resource.error({
          error: 'User Not logged in'
        })
    default:
      return initialState
  }
}
export default UserGetRequestReduceer
