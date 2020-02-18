import { Component, Input } from '@angular/core';
import { ActiveUser } from 'lib-model/src/lib/User/ActiveUser';

@Component({
    selector: 'app-online-users',
    templateUrl: './online-users.component.html',
    styleUrls: ['./online-users.component.scss']
})
export class OnlineUsersComponent {
    @Input() users: ActiveUser[]
    constructor() { }

}