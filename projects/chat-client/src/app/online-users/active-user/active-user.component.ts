import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-active-user',
    templateUrl: './active-user.component.html',
    styleUrls: ['./active-user.component.scss']
})
export class ActiveUserComponent implements OnInit {
    @Input() fullName: string;
    @Input() imageURL: string;
    ngOnInit() {
        console.log(this.fullName, this.imageURL)
    }
}