import { Injectable } from '@angular/core';
import { GoogleAuthService, GoogleApiService } from 'ng-gapi';
import GoogleUser = gapi.auth2.GoogleUser;
import { AppState, SetCurrent } from '@chat/store';
import { Store } from '@ngrx/store';
import { ChatUser } from '@chat/model';
import { Socket } from 'ngx-socket-io';
import { ActiveUser } from 'lib-model/src/lib/User/ActiveUser';
import { filter } from 'rxjs/operators';
@Injectable()
export class UserService {
    public static SESSION_STORAGE_KEY: string = 'accessToken';
    public user: GoogleUser;

    constructor(private googleAuth: GoogleAuthService, private store: Store<AppState>, private socket: Socket) {
        this.getCurrent();
        this.store.select('user')
            .pipe(
                filter(user => user.isLoggedIn)
            )
            .subscribe(
                user => {
                    const userDto: ActiveUser = {
                        name: user.Name,
                        imageURL: user.imageURL
                    }
                    this.appendActive(userDto);
                }
            )
    }
    private appendActive(user: ActiveUser) {
        this.socket.emit('users', user);
    }
    public getToken(): string {
        let token: string = sessionStorage.getItem(UserService.SESSION_STORAGE_KEY);
        if (!token) {
            throw new Error("no token set , authentication required");
        }
        return sessionStorage.getItem(UserService.SESSION_STORAGE_KEY);
    }
    private getCurrent() {
        this.googleAuth.getAuth().subscribe(
            (api) => {
                if (api) {
                    const currentUser = api.currentUser.get();
                    if (currentUser.isSignedIn()) {
                        this.signInSuccessHandler(currentUser)
                    }
                }
            }
        )
    }
    public signIn(): void {
        this.googleAuth.getAuth()
            .subscribe((auth) => {
                auth.signIn().then(res => this.signInSuccessHandler(res));
            });
    }

    private signInSuccessHandler(res: GoogleUser) {
        this.user = res;
        this.store.dispatch(SetCurrent(new ChatUser(res)))
        sessionStorage.setItem(
            UserService.SESSION_STORAGE_KEY, res.getAuthResponse().access_token
        );
    }
}