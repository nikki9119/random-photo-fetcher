import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { PhotoViewComponent } from './photo-view/photo-view.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    PhotoViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
