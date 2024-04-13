import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CakeDetailsPage } from './cake-details.page';

describe('CakeDetailsPage', () => {
  let component: CakeDetailsPage;
  let fixture: ComponentFixture<CakeDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
