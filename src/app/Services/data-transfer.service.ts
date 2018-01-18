import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataTransferService {

  subjectName: Subject<string> = new Subject<string>();
  subjectBirthdate: Subject<string> = new Subject<string>();
  subjectCity: Subject<string> = new Subject<string>();
  constructor() {
   }

  /**
   * setName
   */
  public setName(value:string) {
    this.subjectName.next(value);
  }
   
  /**
   * setBirthdate
   */
  public setBirthdate(value:string) {
    this.subjectBirthdate.next(value);
  }

    /**
   * setName
   */
  public setCity(value:string) {
    this.subjectCity.next(value);
  }
}
