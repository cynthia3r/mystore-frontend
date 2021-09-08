import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Customer } from '../../models/Customer';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {
  customer: Customer;
  isNameValid: boolean = true
  @Output() registerCustomerData: EventEmitter<Customer> = new EventEmitter<Customer>()

  constructor() {
    this.customer = {
      fullName: '',
      address: '',
      creditCardNumber: ''
    };
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.registerCustomerData.emit(this.customer)
  }

}
