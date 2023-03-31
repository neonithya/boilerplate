import { BaseLayerDataTransformer } from './../../../shared/src/utils/tranformer/base_layer_transformer'
import { UserUpdateModel } from 'shared'

export abstract class UserUpdateResponse implements BaseLayerDataTransformer<UserUpdateResponse, UserUpdateModel> {
  id: any
  title: string
  body: string
  userId: any

  restore(data: UserUpdateModel): UserUpdateResponse {
    throw new Error('Method not implemented.')
  }
  transform(): UserUpdateModel {
    return new UserUpdateModel({ userId: this.userId, body: this.body, title: this.title })
  }
}
