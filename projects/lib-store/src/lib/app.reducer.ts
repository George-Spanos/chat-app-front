import { ActionReducerMap, createSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { userReducer } from './reducers/users.reducer';
import { selectUsersState } from './state';
import { activeUsersReducer } from './reducers/active-users.reducer';

export const appReducers: ActionReducerMap<AppState> = {
    user: userReducer,
    activeUsers: activeUsersReducer
}
export const isLoggedIn = createSelector(selectUsersState, state => state.isLoggedIn)