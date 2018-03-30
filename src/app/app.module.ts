import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list-component';
import { ConvertToSapcesPipe } from './shared/convert-to-spaces.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSapcesPipe
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }