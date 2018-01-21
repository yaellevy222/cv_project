import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './landing-page/header/header.component';
import { CreateButtonComponent } from './landing-page/create-button.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GeneratorComponent } from './generator/generator.component';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './generator/form/form.component';
import { TemplateComponent } from './generator/template/template.component';

import {DataTransferService} from './Services/data-transfer.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDatepickerModule, 
         MatNativeDateModule,
         MatFormFieldModule, 
         MatInputModule,
        } from '@angular/material';

const appRoutes: Routes = [

  {path: '', component: LandingPageComponent},
  {path: 'generate', component: GeneratorComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateButtonComponent,
    LandingPageComponent,
    GeneratorComponent,
    FormComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
     RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    ),
   MatDatepickerModule,
   MatFormFieldModule,
   MatNativeDateModule,
   MatInputModule,
   BrowserAnimationsModule
  ],
  exports: [MatDatepickerModule,
     MatNativeDateModule,
     MatFormFieldModule,
     MatInputModule, 
     BrowserAnimationsModule
  ],
  providers: [DataTransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
