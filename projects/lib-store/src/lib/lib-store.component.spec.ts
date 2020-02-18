import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibStoreComponent } from './lib-store.component';

describe('LibStoreComponent', () => {
  let component: LibStoreComponent;
  let fixture: ComponentFixture<LibStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
