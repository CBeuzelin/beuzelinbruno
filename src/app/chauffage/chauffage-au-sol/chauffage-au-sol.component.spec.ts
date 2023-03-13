import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChauffageAuSolComponent } from './chauffage-au-sol.component';

describe('ChauffageAuSolComponent', () => {
  let component: ChauffageAuSolComponent;
  let fixture: ComponentFixture<ChauffageAuSolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChauffageAuSolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChauffageAuSolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
