import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CheckoutFormComponent } from './checkout-form.component';
import { MOCK_CUSTOMER1 } from '../../testing/mock/mocks';

describe('CheckoutFormComponent', () => {
  let component: CheckoutFormComponent;
  let fixture: ComponentFixture<CheckoutFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutFormComponent ],
      imports: [
        FormsModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutFormComponent);
    component = fixture.componentInstance;

    component.form = {
      firstname: "",
    };

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('initializeForm()', () => {
    it ('should set the form values by customer', () => {
      component.initializeForm(MOCK_CUSTOMER1);
      expect(component.form.firstname).toEqual(MOCK_CUSTOMER1.firstname);
      expect(component.form.lastname).toEqual(MOCK_CUSTOMER1.lastname);
      expect(component.form.postnumber).toEqual(MOCK_CUSTOMER1.postnumber);
      expect(component.form.lastname).toEqual(MOCK_CUSTOMER1.lastname);
      expect(component.form.country).toEqual(MOCK_CUSTOMER1.country);
    });
  });
});
