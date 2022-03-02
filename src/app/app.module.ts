import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FeaturedListComponent } from './components/featured-list/featured-list.component';
import { ProductComponent } from './components/product-list/product/product.component';
import { ParentComponent } from './components/lifecycle/parent/parent.component';
import { ChildComponent } from './components/lifecycle/child/child.component';
import { CurrencyInputDirective } from './shared/directives/currency-input.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    FeaturedListComponent,
    ProductComponent,
    ParentComponent,
    ChildComponent,
    CurrencyInputDirective,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
