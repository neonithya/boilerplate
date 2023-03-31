import { LoginCheckUsecase, UserDetailsUseCase, UserGetUseCase, UserUpdateUsecase } from 'domain-layer'
import { UserRepository } from './../repository/user_repository'
import { DataModule } from 'data'
import { Graph, ObjectGraph, Provides, Singleton } from 'di'
import { UserUpdateRepository } from '../repository/userupdate_repository'

@Singleton()
@Graph({ subgraphs: [DataModule] })
export class DomainModule extends ObjectGraph {
  @Provides()
  providesLoginCheckUseCase(provideUserRepository: UserRepository): LoginCheckUsecase {
    return new LoginCheckUsecase(provideUserRepository)
  }
  @Provides()
  provideUserDetailsUseCase(provideUserRepository: UserRepository): UserDetailsUseCase {
    return new UserDetailsUseCase(provideUserRepository)
  }
  @Provides()
  provideUserUpdateUsecase(provideUserUpdateRespository:UserUpdateRepository ):UserUpdateUsecase{
    return new UserUpdateUsecase(provideUserUpdateRespository)
  }

  @Provides()
  provideUserGetUsecase(provideUserGetRespository:UserUpdateRepository ):UserGetUseCase{
    return new UserGetUseCase(provideUserGetRespository)
  }
}
