import { ActionReducerMap, createSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { userReducer } from './reducers/users.reducer';
import { selectUsersState } from './state';

export const appReducers: ActionReducerMap<AppState> = {
    user: userReducer
}
export const isLoggedIn = createSelector(selectUsersState, state => state.isLoggedIn)