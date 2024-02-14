import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FuentesPage } from './fuentes.page';

describe('FuentesPage', () => {
  let component: FuentesPage;
  let fixture: ComponentFixture<FuentesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FuentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
