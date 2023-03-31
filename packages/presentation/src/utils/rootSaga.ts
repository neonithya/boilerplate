import { all, fork, takeLatest } from '@redux-saga/core/effects'
import * as getUserSaga from '../feature/login/saga'
import * as UserDataRequestSaga from '../feature/userDetail/saga'
import  * as UserGetRequestSaga from '../feature/userGet/saga'
import * as UserUpdateRequestSaga from '../feature/userUpdate/saga'

// export default function* rootSaga() {
//   yield takeLatest(REQUEST_USER.MAKE_REQUEST, getUserSaga)
//   yield takeLatest(REQUEST_USER_DATA.MAKE_REQUEST, UserDataRequestSaga)
//   yield takeLatest(REQUEST_UPDATE_DATA.MAKE_REQUEST, UserUpdateRequestSaga)
// }

export default function* rootSaga(){
  yield all([
    ...Object.values(getUserSaga),
    ...Object.values(UserDataRequestSaga),
    ...Object.values(UserUpdateRequestSaga),
    ...Object.values(UserGetRequestSaga)


  ].map(fork))
}