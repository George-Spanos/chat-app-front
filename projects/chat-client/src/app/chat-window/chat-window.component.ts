import { Component, ElementRef, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Message } from '@chat/model';
import { AppState, isLoggedIn } from '@chat/store';
import { Store } from '@ngrx/store';
import { Observable, interval, timer } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { ChatService } from '../services/chat.service';
import { UserService } from '../services/user.service';
@Component({
    selector: 'app-chat-window',
    templateUrl: './chat-window.component.html',
    styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent {
    @ViewChild('audioEl', { static: true }) audioElement: ElementRef;
    public users: number = 0;
    public message: string = '';
    public messages: Message[] = [];
    private hasNewMessage = false;
    public muted = true;
    private title: string;
    isLoggedIn: Observable<boolean>;
    constructor(
        private chatService: ChatService,
        private titleService: Title,
        public userService: UserService,
        public store: Store<AppState>
    ) {

    }

    ngOnInit() {
        this.title = this.titleService.getTitle();
        this.isLoggedIn = this.store.select(isLoggedIn);
        this.titleService.setTitle('My chat App');
        this.chatService.receiveChat()
            .subscribe(message => {
                this.triggerNewMessageTitle(message);
                if (!this.muted) this.playAudio();
                this.messages.push({ content: message.content, timestamp: message.timestamp, senderName: message.senderName, senderImg: message.senderImg });
                console.log(this.messages);
            });

        this.chatService.getUsers().subscribe((users: number) => {
            this.users = users;
        });

    }

    addChat() {
        if (this.isLoggedIn) {
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
    private triggerNewMessageTitle(message: Message) {
        const notificationText = `${message.senderName} sent a new Message`;
        const INTERVAL_TAKE = 11;
        if (!this.hasNewMessage) {
            this.hasNewMessage = true;
            interval(1000).pipe(
                take(INTERVAL_TAKE),
                tap(
                    () => this.title === this.titleService.getTitle() ? this.titleService.setTitle(notificationText) : this.titleService.setTitle(this.title)
                )
            ).subscribe(
                interval => {
                    if (interval === INTERVAL_TAKE) {
                        this.title = this.titleService.getTitle();
                        this.hasNewMessage = false;
                    }
                }
            )
        }
    }
    private playAudio() {
        this.audioElement.nativeElement.play();
    }
}