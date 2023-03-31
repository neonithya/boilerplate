import { UserGetModel } from 'shared'
import { UserUpdateRepository } from '../../domain'
import { FutureUseCase } from '../base/base_usecase' 
import { Params } from '../base/params' 

export class UserGetUseCase extends FutureUseCase<UserGetUseCaseParams, UserGetModel> {
  private readonly userRepository: UserUpdateRepository
  constructor(repo: UserUpdateRepository) {
    super()
    this.userRepository = repo
  }
  async execute(params?: UserGetUseCaseParams): Promise<UserGetModel> {
    if (params?.verify) {
      return await this.userRepository.userGet({
        userId: params.userId
      })
    }
  }
}
export class UserGetUseCaseParams extends Params {
  readonly userId?: any

  constructor(params?: { userId: any }) {
    super({})
    this.userId = params.userId
  }

  verify(): boolean {
    return true
  }
}
