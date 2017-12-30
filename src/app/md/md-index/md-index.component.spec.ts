import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdIndexComponent } from './md-index.component';

describe('MdIndexComponent', () => {
  let component: MdIndexComponent;
  let fixture: ComponentFixture<MdIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
