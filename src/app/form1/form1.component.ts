import { Component } from '@angular/core';
import Nationality from '../entities/Nationality';
import { NationalityService } from '../nationality.service';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component {
  constructor(nationalityService: NationalityService) {
    this.Nationalities = nationalityService.Nationalities;
  }
  Nationalities: Nationality[];
}
