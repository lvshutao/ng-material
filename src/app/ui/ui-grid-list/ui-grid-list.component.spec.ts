import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiGridListComponent } from './ui-grid-list.component';

describe('UiGridListComponent', () => {
  let component: UiGridListComponent;
  let fixture: ComponentFixture<UiGridListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiGridListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
