import { createFeatureSelector } from '@ngrx/store';
import { ActiveUser } from '@chat/model';

export interface ActiveUsersState {
    users: ActiveUser[]
}
export const ActiveUsersInitialState: ActiveUsersState = {
    users: []
}
export const selectUsersState = createFeatureSelector<ActiveUsersState>("active-users");