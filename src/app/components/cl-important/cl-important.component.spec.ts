import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClImportantComponent } from './cl-important.component';

describe('ClImportantComponent', () => {
  let component: ClImportantComponent;
  let fixture: ComponentFixture<ClImportantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClImportantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClImportantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
