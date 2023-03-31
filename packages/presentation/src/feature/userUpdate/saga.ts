import { UserUpdateParams } from 'domain-layer/src/usecases/first/user_update_usecases'
import { UserGetUseCaseParams } from 'domain-layer/src/usecases/first/userget_usecases'
import { DomainModule } from 'domain-layer/src/di/domain_module'
import { Obsidian } from 'di'
import { call, put, takeLatest } from 'redux-saga/effects'
import React from 'react'
import { REQUEST_UPDATE_DATA } from './action'

function* UserUpdateRequestSaga(action) {
  try {
    const data = yield Obsidian.obtain(DomainModule)
      .provideUserUpdateUsecase()
      .execute(
        new UserUpdateParams({
          title: action?.params?.title,
          body: action?.params?.body,
          userId: action?.params?.userId
        })
      )
    if (data) {
      yield put({ type: REQUEST_UPDATE_DATA.REQUEST_UPDATE_DATA_SUCCESS, payload: data })
    } else {
      yield put({ type: REQUEST_UPDATE_DATA.REQUEST_UPDATE_DATA_FAILURE, payload: data })
    }
  } catch (e) {
    console.log(e)
  }
}

export function* UserUpdateRequestSagaApi() {
  yield takeLatest(REQUEST_UPDATE_DATA.MAKE_REQUEST, UserUpdateRequestSaga)
}


