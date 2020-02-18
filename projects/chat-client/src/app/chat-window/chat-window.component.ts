import { Component, ElementRef, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Message } from '@chat/model';
import { AppState, isLoggedIn } from '@chat/store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { ChatService } from '../services/chat.service';
import { UserService } from '../services/user.service';
@Component({
    selector: 'app-chat-window',
    templateUrl: './chat-window.component.html',
    styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent {
    @ViewChild('loginRef', { static: true }) loginElement: ElementRef;
    public users: number = 0;
    public message: string = '';
    public messages: Message[] = [];
    isLoggedIn: Observable<boolean>;
    constructor(
        private chatService: ChatService,
        private titleService: Title,
        public userService: UserService,
        public store: Store<AppState>
    ) {

    }

    ngOnInit() {
        this.isLoggedIn = this.store.select(isLoggedIn);
        this.titleService.setTitle('My chat App');
        this.chatService.receiveChat().subscribe(message => {
            this.messages.push({ content: message.content, timestamp: message.timestamp, senderName: message.senderName, senderImg: message.senderImg });
            console.log(this.messages);
        });

        this.chatService.getUsers().subscribe((users: number) => {
            this.users = users;
        });

    }

    addChat() {
        this.store.select('user').pipe(
            take(1),
            tap((user) => {
                const newMessage: Message = {
                    content: this.message,
                    senderName: user.firstName,
                    timestamp: new Date(),
                    senderImg: user.imageURL
                }
                this.messages.push(newMessage);
                this.chatService.sendChat(newMessage);
                this.message = '';
            })
        ).subscribe()
    }
}