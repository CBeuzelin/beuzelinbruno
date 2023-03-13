import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationRenovationSalleDeBainComponent } from './creation-renovation-salle-de-bain.component';

describe('CreationRenovationSalleDeBainComponent', () => {
  let component: CreationRenovationSalleDeBainComponent;
  let fixture: ComponentFixture<CreationRenovationSalleDeBainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationRenovationSalleDeBainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationRenovationSalleDeBainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
