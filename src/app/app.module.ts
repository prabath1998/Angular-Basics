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
import { PostsComponent } from './components/posts/posts/posts.component';
import { PostsnewComponent } from './components/postsnew/postsnew.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'product-list',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    component: ProductListComponent,
  },
  {
    path: 'product-list',
    component: ProductListComponent,
  },
  {
    path: 'ft-list',
    component: FeaturedListComponent,
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'parent',
    component: ParentComponent,
  },
  {
    path: 'details',
    component: PostsnewComponent,
  },
  {
    path: '**',
    component: ChildComponent,
    // redirectTo: 'product-list',
    // pathMatch: 'full',
  },
];

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
    PostsComponent,
    PostsnewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
