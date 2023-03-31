import { UserUpdateParams } from 'domain-layer/src/usecases/first/user_update_usecases'
import { UserGetUseCaseParams } from 'domain-layer/src/usecases/first/userget_usecases'
import { DomainModule } from 'domain-layer/src/di/domain_module'
import { Obsidian } from 'di'
import { call, put, takeLatest } from 'redux-saga/effects'
import React from 'react'
import { REQUEST_GET_DATA } from './actions'


function* UserGetRequestSaga(action) {
  try {
    const data = yield Obsidian.obtain(DomainModule)
      .provideUserGetUsecase()
      .execute(
        new UserGetUseCaseParams({
          userId: action?.params?.userId
        })
      )
    console.log('dataresp-------------', data)
    if (data) {
      yield put({ type: REQUEST_GET_DATA.REQUEST_GET_DATA_SUCCESS, payload: data })
    } else {
      yield put({ type: REQUEST_GET_DATA.REQUEST_GET_DATA_FAILURE, payload: data })
    }
  } catch (e) {
    console.log(e)
  }
}

export function* UserGetRequestSagaApi() {
  yield takeLatest(REQUEST_GET_DATA.MAKE_REQUEST, UserGetRequestSaga)
}
