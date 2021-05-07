import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component'
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    MenuComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    MenuComponent,
    SidebarComponent,
  ]
})
export class SharedModule { }
