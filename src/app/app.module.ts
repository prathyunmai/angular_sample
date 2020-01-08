import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from 'src/app/products/product-list.component';
import { ConvertToSpacesPipe } from 'src/app/products/convert-to-spaces.pipe';
import { ProductFilterPipe } from 'src/app/products/product-filter.pipe';
import { StarComponent } from 'src/app/shared/star.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    ProductFilterPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
