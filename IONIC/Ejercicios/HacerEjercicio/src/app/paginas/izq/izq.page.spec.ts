import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IzqPage } from './izq.page';

describe('IzqPage', () => {
  let component: IzqPage;
  let fixture: ComponentFixture<IzqPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IzqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
