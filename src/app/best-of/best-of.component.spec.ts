import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestOfComponent } from './best-of.component';

describe('BestOfComponent', () => {
  let component: BestOfComponent;
  let fixture: ComponentFixture<BestOfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BestOfComponent]
    });
    fixture = TestBed.createComponent(BestOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
