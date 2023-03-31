import { UserGetModel, UserUpdateModel } from "shared";
export interface UserUpdateRepository {
    userUpdate(params: { title: string; body: string, userId: any }): Promise<UserUpdateModel>
    userGet(params:{userId:any}): Promise<UserGetModel>

  }