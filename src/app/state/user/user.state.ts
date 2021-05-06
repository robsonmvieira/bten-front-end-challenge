import { UserService } from "src/app/modules/admin/services/user.service";
import { UserStateProps } from "./user-state.interface";
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { CreateUser, GetAllUsers, Login } from "./user.action";
import { map } from "rxjs/operators";


@State<UserStateProps>({
  name: "users",
  defaults: {
    users: [],
    userLogged: null,
    token: null,
  }
})

@Injectable()
export class UserState {
  constructor(private userService: UserService){}

  @Selector()
  static allUsers(ctx: UserStateProps) {
    return ctx.users
  }

  @Selector()
  static userLength(ctx: UserStateProps) {
    return ctx.users.length
  }
  @Selector()
  static getUserById(ctx: UserStateProps, id: string) {
    return ctx.users.find(user => user.id === id)
  }

  @Selector()
  static getUserLogged(ctx: UserStateProps) {
    return ctx.userLogged
  }

  @Selector()
  static getToken(ctx: UserStateProps) {
    return ctx.token
  }

  @Action(GetAllUsers)
  getUsers(ctx: StateContext<UserStateProps>) {
    return this.userService.list().pipe(
      map(response => {
        const state = ctx.getState();
        ctx.patchState({...state, users: response })
      })
    )
  }
  @Action(Login)
  login(ctx: StateContext<UserStateProps>, action: Login) {
    return this.userService.login(action.loginProps).pipe(
      map(response => {
        const state = ctx.getState();
        ctx.patchState({
          ...state,
          userLogged: {...response.user},
          token: response.token })
      })
    )
  }

  @Action(CreateUser)
  createUser(ctx: StateContext<UserStateProps>, action: CreateUser) {
    return this.userService.create(action.payload).pipe(
      map((response: any) => { console.log('response => ', response.statusCode)})
    )
  }

}

