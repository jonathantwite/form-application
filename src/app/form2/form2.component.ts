import { Component } from '@angular/core';
import { NationalityService } from '../nationality.service';
import Nationality from '../entities/Nationality';
import { NewElector } from '../forms/new-elector';
import { Address } from '../forms/address';
import { NewElectorService } from '../new-elector.service';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component {
  constructor(
    _nationalityService: NationalityService,
    private _newElectorService: NewElectorService) {
    this.Nationalities = _nationalityService.Nationalities;
    this.NewElectorModel = new NewElector('', '', '', new Address(), 'UK', 'None', true);

    /* This manual validation does not happen unless the user exits the field, so needs to be checked now to see if the field starts valid or not */
    this.validateNationality(this.NewElectorModel.Nationality);
  }
  Nationalities: Nationality[];
  NewElectorModel: NewElector;
  Submitted = false;
  ErrorMessage = '';

  NationalityHasError = true;

  validateNationality(value: string) {
    this.NationalityHasError = value=='NEC';
  }

  onSubmit(){
    this.Submitted = true;
    this._newElectorService.submit(this.NewElectorModel)
      .subscribe( 
        data => console.log('Success!', data),
        error => this.ErrorMessage = error.statusText
      );
  }
}
