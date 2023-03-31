import { MyLoginResponse } from './../model/my_login_response'
import { BasePath, BaseService, GET, POST, Response, Headers, Body } from 'ts-retrofit'
import { UserCheckModal, UserGetModel, UserUpdateModel } from 'shared'
import { UserUpdateResponse } from '../model/userUpdate_repository'
import { UserGetesponse } from '../model/userGet_response'

@BasePath('')
class RetrofitService extends BaseService {
  @POST('/login')
  async login(@Body item: UserCheckModal): Promise<Response<MyLoginResponse>> {
    return <Response<MyLoginResponse>>{}
  }
  @POST('posts')
  async userUpdates(@Body item: UserUpdateModel): Promise<Response<UserUpdateResponse>> {
    return <Response<UserUpdateResponse>>{}
  }
  @GET('posts')
  async userGets(item:UserGetModel): Promise<Response<UserGetesponse>> {
    return <Response<UserGetesponse>>{}
  }
}

export default RetrofitService
