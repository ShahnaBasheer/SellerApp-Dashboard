import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHeaderWrapperComponent } from './card-header-wrapper.component';

describe('CardHeaderWrapperComponent', () => {
  let component: CardHeaderWrapperComponent;
  let fixture: ComponentFixture<CardHeaderWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardHeaderWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardHeaderWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
