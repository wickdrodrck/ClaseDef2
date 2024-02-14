import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculascomponentComponent } from './peliculascomponent.component';

describe('PeliculascomponentComponent', () => {
  let component: PeliculascomponentComponent;
  let fixture: ComponentFixture<PeliculascomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeliculascomponentComponent]
    });
    fixture = TestBed.createComponent(PeliculascomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
