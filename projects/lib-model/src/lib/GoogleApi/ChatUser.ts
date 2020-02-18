import { UserState } from '@chat/store';

export class ChatUser implements UserState {
    firstName: string;
    email: string;
    isLoggedIn: boolean;
    imageURL: string;
    Name: string
    constructor(user: gapi.auth2.GoogleUser) {
        this.firstName = user.getBasicProfile().getGivenName();
        this.Name = user.getBasicProfile().getName();
        this.email = user.getBasicProfile().getEmail();
        this.isLoggedIn = user.isSignedIn();
        this.imageURL = user.getBasicProfile().getImageUrl();
    }
}