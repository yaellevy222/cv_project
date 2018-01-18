import { DataTransferService } from './../../Services/data-transfer.service';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  name:string;
  birthdate:string;
  city:string;
  constructor(private dataService: DataTransferService) {
  
   }

   ngOnInit() {
    this.dataService.subjectName.subscribe((value) => {
        this.name = value;
    });

    this.dataService.subjectBirthdate.subscribe((value) => {
      this.birthdate = value;
  });

  this.dataService.subjectCity.subscribe((value) => {
    this.city = value;
});
   }


  }

