import { Component, OnInit } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-create-button',
  template:`
  <div class="button-container">
      <button routerLink="/generate">Create now!</button>
 </div>`,
 styles: [`
 .button-container{
    left: 50%;
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 1rem;
 }`]
})
export class CreateButtonComponent {

  constructor() { }

}
