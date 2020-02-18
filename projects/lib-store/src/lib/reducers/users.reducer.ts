import { Action, createReducer, on } from "@ngrx/store";
import * as UserActions from '../actions/user.action';
import { UserInitialState, UserState } from '../state';

const UserReducer = createReducer(
    UserInitialState,
    on(UserActions.SetCurrent, (state, user) => {
        // set current user
        console.log('should set current user')
        console.log(user)
        return { ...state, ...user }
    })
)
export function userReducer(state: UserState | undefined, action: Action) {
    return UserReducer(state, action);
}