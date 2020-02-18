import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibModelComponent } from './lib-model.component';

describe('LibModelComponent', () => {
  let component: LibModelComponent;
  let fixture: ComponentFixture<LibModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
