import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MenuComponent } from './components/menu/menu.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserState } from './state/user/user.state';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([
      UserState
    ],
    { developmentMode: !environment.production }),
    NgxsReduxDevtoolsPluginModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
