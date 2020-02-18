import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibDomainComponent } from './lib-domain.component';

describe('LibDomainComponent', () => {
  let component: LibDomainComponent;
  let fixture: ComponentFixture<LibDomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibDomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
