import { CreateUserDTO } from "./dtos/create-user.dto"
import { UpdateUserDTO } from "./dtos/update-user.dto"

export class GetAllUsers {
  static readonly type = '[User] Get all users'
  constructor() {}
}

export class GetUserById {
  static readonly type = '[User] get users by id'
  constructor(public userId: string) {}
}

export class CreateUsers {
  static readonly type = '[User] create new user'
  constructor(public payload: CreateUserDTO) {}
}

export class UpdateUsers {
  static readonly type = '[User] update user'
  constructor(public payload: UpdateUserDTO) {}
}

export class DeleteUsers {
  static readonly type = '[User] delete user'
  constructor(public userId: string) {}
}
