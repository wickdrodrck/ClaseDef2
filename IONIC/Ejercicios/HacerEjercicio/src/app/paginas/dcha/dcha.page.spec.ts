import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DchaPage } from './dcha.page';

describe('DchaPage', () => {
  let component: DchaPage;
  let fixture: ComponentFixture<DchaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DchaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
