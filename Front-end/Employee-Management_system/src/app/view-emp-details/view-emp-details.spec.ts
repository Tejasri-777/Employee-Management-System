import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewEmpDetails } from './view-emp-details';

describe('ViewEmpDetails', () => {
  let component: ViewEmpDetails;
  let fixture: ComponentFixture<ViewEmpDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEmpDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewEmpDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
