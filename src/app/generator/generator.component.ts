import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import{ DataTransferService } from "./../Services/data-transfer.service"

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent{

  constructor(private dataService: DataTransferService) { }

;}
