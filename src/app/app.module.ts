import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AbcService } from './abc.service';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AbcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
