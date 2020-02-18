import { createFeatureSelector } from '@ngrx/store';

export interface UserState {
    firstName: string;
    email: string;
    Name: string;
    isLoggedIn: boolean;
    imageURL: string;
}
export const UserInitialState: UserState = {
    firstName: null,
    Name: null,
    email: null,
    isLoggedIn: null,
    imageURL: null
}
export const selectUsersState = createFeatureSelector<UserState>("user");