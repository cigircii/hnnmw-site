import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './components/app.component';
import { HeaderComponent } from "./components/header.component";
import { AboutComponent } from "./components/about.component";
// import { RouterModule }   from '@angular/router';

@NgModule({

  // imports: [BrowserModule]
  //   // RouterModule.forRoot([
  //   //   { path: '', component: AppComponent },
  //   //   { path: 'about', component: AboutComponent }
  //   // ])],
  imports: [BrowserModule],
  declarations: [ AppComponent, HeaderComponent, AboutComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
