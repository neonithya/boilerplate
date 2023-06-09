import { UserDetailsUseCaseParams } from './../../../../domain/src/usecases/user_details_usecase'
import { LoginCheckParams } from 'domain-layer/src/usecases/first/login_check_usecase'
import { DomainModule } from 'domain-layer/src/di/domain_module'
import { Obsidian } from 'di'
import { call, put, takeLatest } from 'redux-saga/effects'
import React from 'react'
import { REQUEST_USER_DATA } from './action'

function* UserDataRequestSaga(action) {
  try {
    const data = yield Obsidian.obtain(DomainModule)
      .provideUserDetailsUseCase()
      .execute(new UserDetailsUseCaseParams({ email: action.params.email }))
    yield put({ type: REQUEST_USER_DATA.REQUEST_USER_DATA_SUCCESS, payload: data })
  } catch (e) {
    console.log(e)
  }
}

export function* UserDataRequestSagaApi(){
  yield takeLatest(REQUEST_USER_DATA.MAKE_REQUEST, UserDataRequestSaga)
}

// export default UserDataRequestSaga
