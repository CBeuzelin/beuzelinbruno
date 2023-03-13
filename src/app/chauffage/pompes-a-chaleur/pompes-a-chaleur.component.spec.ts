import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PompesAChaleurComponent } from './pompes-a-chaleur.component';

describe('PompesAChaleurComponent', () => {
  let component: PompesAChaleurComponent;
  let fixture: ComponentFixture<PompesAChaleurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PompesAChaleurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PompesAChaleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
