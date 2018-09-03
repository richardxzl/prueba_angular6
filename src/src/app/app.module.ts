import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { NotasListComponent } from  './notas-list/notas-list.component';
import { NotasCreateComponent } from  './notas-create/notas-create.component';
import { NotasUpdateComponent } from  './notas-update/notas-update.component';

import {AppRoutingModule} from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { UiModule } from './ui/ui.module';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    UiModule
  ],
  declarations: [
    AppComponent,
    NotasListComponent,
    NotasCreateComponent,
    NotasUpdateComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
