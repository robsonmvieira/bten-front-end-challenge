import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,

  ],

})
export class CoreModule { }
