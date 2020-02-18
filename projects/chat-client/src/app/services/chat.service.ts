import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { Message } from '@chat/model';

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

    getUsers(): Observable<number> {
        return this.socket.fromEvent('users');
    }

}