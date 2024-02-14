import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrincipPage } from './princip.page';

describe('PrincipPage', () => {
  let component: PrincipPage;
  let fixture: ComponentFixture<PrincipPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrincipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
