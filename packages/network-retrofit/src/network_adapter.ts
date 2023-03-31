import RetrofitService from './services/retrofit_service'
import { NetworkPort } from 'data'
import { MyFirstModel, UserCheckModal, UserGetModel, UserUpdateModel } from 'packages/shared/src/shared'

class NetowrkAdapter implements NetworkPort {
  readonly retrofitService: RetrofitService

  constructor(params: { retrofitService: RetrofitService }) {
    this.retrofitService = params.retrofitService
  }
  async yourFirstNetworkCall(): Promise<MyFirstModel> {
    throw new Error('Method not implemented.')
  }

  async loginCall(user: UserCheckModal): Promise<UserCheckModal> {
    try {
      const loginResponse = await this.retrofitService.login({ email: user.email, password: user.password })
      return loginResponse.data.access_token
    } catch (e) {
      return e.message
    }
  }
  async userUpdateCall(user: UserUpdateModel): Promise<UserUpdateModel> {
    try {
      const userUpdateResponse = await this.retrofitService.userUpdates({
        title: user.title,
        body: user.body,
        userId: user.userId
      })
      return userUpdateResponse.data
    } catch (error) {
      return error
    }
  }

  async usergetCall(user: UserGetModel): Promise<UserGetModel> {
    try {
      const userGetResponse = await this.retrofitService.userGets({
        userId: user.userId
      })
      console.log('resp---------')

      return userGetResponse.data
    } catch (error) {
      return error
    }
  }
}

export default NetowrkAdapter
