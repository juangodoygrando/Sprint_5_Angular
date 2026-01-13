import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlanStepsSectionComponent } from './create-plan-steps-section.component';

describe('CreatePlanStepsSectionComponent', () => {
  let component: CreatePlanStepsSectionComponent;
  let fixture: ComponentFixture<CreatePlanStepsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePlanStepsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePlanStepsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
