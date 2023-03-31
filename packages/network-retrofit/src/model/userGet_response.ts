import { BaseLayerDataTransformer } from './../../../shared/src/utils/tranformer/base_layer_transformer'
import { UserGetModel } from 'shared'

export abstract class UserGetesponse implements BaseLayerDataTransformer<UserGetesponse, UserGetModel> {

  userId: any

  restore(data: UserGetModel): UserGetesponse {
    throw new Error('Method not implemented.')
  }
  transform(): UserGetModel {
    return new UserGetModel({ userId: this.userId })
  }
}