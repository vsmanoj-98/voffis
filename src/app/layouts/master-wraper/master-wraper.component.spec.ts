import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterWraperComponent } from './master-wraper.component';

describe('MasterWraperComponent', () => {
  let component: MasterWraperComponent;
  let fixture: ComponentFixture<MasterWraperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterWraperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterWraperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
