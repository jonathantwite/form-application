import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NationalityService } from '../nationality.service';
import Nationality from '../entities/Nationality';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.scss']
})
export class Form3Component {
  constructor(nationalityService: NationalityService) {
    this.Nationalities = nationalityService.Nationalities;
  }
  Nationalities: Nationality[];
  
  public NewElectorForm = new FormGroup({
    Forename: new FormControl(''),
    Surname: new FormControl(''),
    Email: new FormControl(''),

    Address: new FormGroup({
      AddressLine1: new FormControl(''),
      AddressLine2: new FormControl(''),
      AddressLine3: new FormControl(''),
      AddressLine4: new FormControl(''),
      AddressLine5: new FormControl(''),
      AddressLine6: new FormControl(''),
      Postcode: new FormControl('')
    }),

    Nationality: new FormControl('UK'),
    RequestAbsentVote: new FormControl('None'),
    OptOut: new FormControl(true)
  });

  loadDummyData(){
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
      Nationality: 'EU',
      RequestAbsentVote: 'Postal',
      OptOut: false
    });
  }

  loadSomeData(){
    this.NewElectorForm.patchValue({
      Forename: 'Sally',
      Surname: 'Johnstone',
    })
  }

}
