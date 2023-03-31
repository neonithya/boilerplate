export class UserUpdateModel {
  readonly title?: string
  readonly body?: string
  readonly userId?: any

  constructor(params?: { title?: string; body?: string; userId?: any }) {
    this.title = params.title
    this.body = params.body
    this.userId = params.userId
  }
}

export class UserGetModel {
  readonly userId?: any

  constructor(params?: { userId?: any }) {
    this.userId = params.userId
  }
}
