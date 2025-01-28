import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIntegrationComponent } from './list-integration.component';

describe('ListIntegrationComponent', () => {
  let component: ListIntegrationComponent;
  let fixture: ComponentFixture<ListIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListIntegrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
