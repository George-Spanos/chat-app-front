import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, SharedModule, SOCKETS_CONFIG } from '@chat/shared';
import { SocketIoModule } from 'ngx-socket-io';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatService } from './services/chat.service';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { UserService } from './services/user.service';
import { StoreModule } from '@ngrx/store';
import { appReducers } from '@chat/store';
import { OnlineUsersComponent } from './online-users/online-users.component';
import { ActiveUserComponent } from './online-users/active-user/active-user.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatWindowComponent,
    OnlineUsersComponent,
    ActiveUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(appReducers),
    SocketIoModule.forRoot(SOCKETS_CONFIG),
    MaterialModule,
    SharedModule,
  ],
  providers: [ChatService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
