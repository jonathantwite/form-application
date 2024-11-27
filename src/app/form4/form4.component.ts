import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, } from '@angular/forms';
import { emailFormatValidator, regexFormatValidator } from '../Validators/emailFormatValidator';
import { addressValidator } from '../Validators/addressValidator';
import { NationalityService } from '../nationality.service';
import Nationality from '../entities/Nationality';
import { NewElectorService } from '../new-elector.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form4',
  templateUrl: './form4.component.html',
  styleUrls: ['./form4.component.scss']
})
export class Form4Component implements OnInit, OnDestroy {
  constructor(
    private fb: FormBuilder,
    private nationalityService: NationalityService,
    private newElectorService: NewElectorService) { }
    
  ngOnInit(): void {
    this.Nationalities = this.nationalityService.Nationalities;
    this.NewElectorForm = this.fb.group({
      Forename: ['', [Validators.required, Validators.minLength(3), regexFormatValidator(/[A-Z].*|$^/)]],
      Surname: ['', Validators.required],
      Email: ['', [Validators.required, emailFormatValidator]],
  
      Address: this.fb.group({
        AddressLine1: [''],
        AddressLine2: [''],
        AddressLine3: [''],
        AddressLine4: [''],
        AddressLine5: [''],
        AddressLine6: [''],
        Postcode: ['']
      }, { validators: addressValidator }),
    
      PhoneNumbers: this.fb.array([]),

      Nationality: ['UK'],
      RequestAbsentVote: ['None'],
      ProxyName: [''],
      OptOut: [true]
    });

    this.subscriptions.push(
      this.NewElectorForm.get('RequestAbsentVote')?.valueChanges
        .subscribe(checkedValue => {
          const proxyName = this.NewElectorForm.get('ProxyName');
            if(checkedValue == 'Proxy' || checkedValue == 'PostalProxy'){
              proxyName?.setValidators(Validators.required);
            }
            else {
              proxyName?.clearValidators();
            }
            proxyName?.updateValueAndValidity();
          }));
  }
  
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      if(subscription instanceof Subscription){
        subscription.unsubscribe();
      }
    });
  }
    
  get Forename() { return this.NewElectorForm.get('Forename'); }
  get Email() { return this.NewElectorForm.get('Email'); }
  get Address() { return this.NewElectorForm.get('Address'); }
  get ProxyName() { return this.NewElectorForm.get('ProxyName'); }
  get PhoneNumbers() { return this.NewElectorForm.get('PhoneNumbers') as FormArray; }
  
  private subscriptions: (Subscription|undefined)[] = [];

  public Nationalities!: Nationality[];
  public NewElectorForm!: FormGroup;

  addPhoneNumber() {
    this.PhoneNumbers.push(this.fb.control('', Validators.required));
  }
  deletePhoneNumber(index: number) {
    this.PhoneNumbers.removeAt(index);
  }

  loadDummyData() {
    const phoneNumbers = ['01234567890', '07987654321'];
    this.PhoneNumbers.clear();
    for(let i = 0; i < phoneNumbers.length; i++) {
      this.addPhoneNumber();
    }

    this.NewElectorForm.setValue({
      Forename: 'John',
      Surname: 'Smith',
      Email: 'john.smith@example.com',
      Address: {
        AddressLine1: '1 The Street',
        AddressLine2: 'Townville',
        AddressLine3: 'Countyshire',
        AddressLine4: '',
        AddressLine5: '',
        AddressLine6: '',
        Postcode: 'AB1 2CD'
      },
      PhoneNumbers: phoneNumbers,
      Nationality: 'EU',
      RequestAbsentVote: 'Postal',
      ProxyName: '',
      OptOut: false
    });
  }

  loadSomeData() {
    this.NewElectorForm.patchValue({
      Forename: 'Sally',
      Surname: 'Johnstone',
    })
  }

  onSubmit() {
    this.subscriptions.push(
      this.newElectorService.submit(this.NewElectorForm.value)
        .subscribe(
          { 
            next: data => console.log('Success!', data),
            error: error => console.log('Error!', error)//this.ErrorMessage = error.statusText
          })
    );
  }
}
