import { UserUpdateModel } from 'shared'
import { UserUpdateRepository } from '../../repository/userupdate_repository' 
import { FutureUseCase } from '../base/base_usecase'
import { Params } from '../base/params'

export class UserUpdateUsecase extends FutureUseCase<UserUpdateParams, UserUpdateModel> {
  private readonly userUpdateRepository: UserUpdateRepository
  constructor(repo: UserUpdateRepository) {
    super()
    this.userUpdateRepository = repo
  }
  async execute(params?: UserUpdateParams): Promise<UserUpdateModel> {
    if (params?.verify) {
      return await this.userUpdateRepository.userUpdate({
        title: params.title,
        body: params.body,
        userId:params.userId
      })
    }
  }
}
export class UserUpdateParams extends Params {
  readonly title?: string
  readonly body?: string
  readonly userId ?:any

  constructor(params?: { title: string; body: string, userId: any }) {
    super({})
    this.title = params.title
    this.body = params.body
    this.userId=params.userId
  }

  verify(): boolean {
    return true
  }
}
