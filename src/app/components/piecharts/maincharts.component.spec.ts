import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainchartsComponent } from './maincharts.component';

describe('MainchartsComponent', () => {
  let component: MainchartsComponent;
  let fixture: ComponentFixture<MainchartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainchartsComponent]
    });
    fixture = TestBed.createComponent(MainchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
