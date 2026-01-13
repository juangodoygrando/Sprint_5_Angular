import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlanHeroSectionComponent } from './create-plan-hero-section.component';

describe('CreatePlanHeroSectionComponent', () => {
  let component: CreatePlanHeroSectionComponent;
  let fixture: ComponentFixture<CreatePlanHeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePlanHeroSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePlanHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
