import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibrounicoPage } from './librounico.page';

describe('LibrounicoPage', () => {
  let component: LibrounicoPage;
  let fixture: ComponentFixture<LibrounicoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LibrounicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
