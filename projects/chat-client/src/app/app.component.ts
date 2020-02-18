import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppState } from '@chat/store';
import { Store } from '@ngrx/store';
import { interval } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {
    interval(3000).pipe(
      switchMap(() =>
        this.store.select('user').pipe(tap(c => console.log(c)))
      )
    ).subscribe()
  }
}