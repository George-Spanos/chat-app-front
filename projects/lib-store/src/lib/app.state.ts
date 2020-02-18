import { UserState } from './state';
import { ActiveUsersState } from './state/active-users.state';

export interface AppState {
    user: UserState;
    activeUsers: ActiveUsersState
}