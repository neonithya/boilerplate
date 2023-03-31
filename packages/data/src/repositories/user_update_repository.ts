import { UserGetModel, UserUpdateModel } from 'shared'
import { NetworkPort } from './../out/network_port'
import { DatabasePort } from '../out/database_port'
import { UserUpdateRepository } from 'domain-layer'
export class UserUpdateRespositoryImpl implements UserUpdateRepository {
  // readonly database: DatabasePort
  readonly network: NetworkPort

  constructor(params: { databasePort?: DatabasePort; networkPort: NetworkPort }) {
    // this.database = params.databasePort
    this.network = params.networkPort
  }

  async userUpdate(params?: { title: string; body: string; userId: any }): Promise<UserUpdateModel> {
    const message = 'Request failed with status code 403'
    const loginResponse = await this.network.userUpdateCall({
      title: params.title,
      body: params.body,
      userId: params.userId
    })
    if (loginResponse) {
      return loginResponse
    }
  }

  async userGet(params?: { userId: any }): Promise<UserGetModel> {
    const loginResponse = await this.network.usergetCall({
      userId:params.userId

    })
    if (loginResponse) {
      return loginResponse
    }
  }
}
