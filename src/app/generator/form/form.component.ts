import {Input , Component, OnInit, Output, EventEmitter} from '@angular/core';
import { DataTransferService } from '../../Services/data-transfer.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private dataService: DataTransferService) {
  }

  public setName(value) {
    this.dataService.setName(value);
  }

  public setBirthdate(value) {
    this.dataService.setBirthdate(value);
  }

  public setCity(value) {
    this.dataService.setCity(value);
  }
}
