import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlomberieSanitaireComponent } from './plomberie-sanitaire.component';

describe('PlomberieSanitaireComponent', () => {
  let component: PlomberieSanitaireComponent;
  let fixture: ComponentFixture<PlomberieSanitaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlomberieSanitaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlomberieSanitaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
