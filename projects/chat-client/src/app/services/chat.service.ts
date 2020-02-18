import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { Message } from '@chat/model';
import { ActiveUser } from 'lib-model/src/lib/User/ActiveUser';

@Injectable({
    providedIn: 'root'
})
export class ChatService {

    constructor(private socket: Socket) {

    }

    sendChat(message: Message) {
        this.socket.emit('chat', message);
    }

    receiveChat(): Observable<Message> {
        return this.socket.fromEvent('chat');
    }

    getUsers(): Observable<ActiveUser[]> {
        return this.socket.fromEvent('users');
    }

}