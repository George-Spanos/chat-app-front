import { Action, createReducer, on } from "@ngrx/store";
import { ActiveUsersState, ActiveUsersInitialState } from '../state/active-users.state';
import * as ActiveUsersActions from '../actions/active-users.actions'
const ActiveUsersReducer = createReducer(
    ActiveUsersInitialState,
    on(ActiveUsersActions.SetActiveUsers, (state, payload) => {
        // set current user
        console.log('should set active users')
        console.log(payload)
        return { ...state, users: payload.users }
    })
)
export function activeUsersReducer(state: ActiveUsersState | undefined, action: Action) {
    return ActiveUsersReducer(state, action);
}