import { UserService } from "src/app/modules/admin/services/user.service";
import { UserStateProps } from "./user-state.interface";
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { GetAllUsers } from "./user.action";
import { map } from "rxjs/operators";


@State<UserStateProps>({
  name: "users",
  defaults: {
    users: []
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

  @Action(GetAllUsers)
  getUsers(ctx: StateContext<UserStateProps>) {
    return this.userService.list().pipe(
      map(response => {
        const state = ctx.getState();
        ctx.patchState({...state, users: response })
      })
    )
  }
}

