import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MAddComponent } from './m-add.component';

describe('MAddComponent', () => {
  let component: MAddComponent;
  let fixture: ComponentFixture<MAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
