import { MyFirstModel, UserCheckModal, UserUpdateModel, UserGetModel } from 'shared'

export interface NetworkPort {
  yourFirstNetworkCall(): Promise<MyFirstModel>
  loginCall(user: UserCheckModal): Promise<UserCheckModal>
  userUpdateCall(user:UserUpdateModel ):Promise<UserUpdateModel>
  usergetCall(user:UserGetModel):Promise<UserGetModel>


}
