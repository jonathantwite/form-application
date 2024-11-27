import { Injectable } from '@angular/core';
import Nationality from './entities/Nationality';

@Injectable({
  providedIn: 'root'
})
export class NationalityService {
  Nationalities: Nationality[] = [
      { Description: "UK citizen", Code: "UK" },
      { Description: "EU citizen", Code: "EU" },
      { Description: "Irish citizen", Code: "ROI" },
      { Description: "Commonwealth citizen", Code: "CW" },
      { Description: "Non-eligible citizen", Code: "NEC" },
    ];
}
