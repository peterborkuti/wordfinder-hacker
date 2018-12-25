import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterinputComponent } from './letterinput.component';

describe('LetterinputComponent', () => {
  let component: LetterinputComponent;
  let fixture: ComponentFixture<LetterinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
