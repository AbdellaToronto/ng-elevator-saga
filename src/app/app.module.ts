import { BrowserModule } from '@angular/platform-browser';
import {Component, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>`
})
export class BaseAppComponent {}


@NgModule({
  declarations: [
    AppComponent,
    BaseAppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path: '', component: AppComponent}])
  ],
  providers: [],
  bootstrap: [BaseAppComponent]
})
export class AppModule { }
