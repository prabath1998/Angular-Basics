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
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';

import { DeactivateGuard } from './shared/guards/deactivate.guard';
import { PipesExampleComponent } from './components/pipes-example/pipes-example.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReversePipe } from './pipes/reverse.pipe';
import { SqrootPipe } from './pipes/sqroot.pipe';
import { FileSizePipe } from './pipes/file-size.pipe';
import { PowerPipe } from './pipes/power.pipe';
import { RepeatPipe } from './pipes/repeat.pipe';
import { ObservableComponent } from './components/observable/observable.component';

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
    canActivate: [AuthGuard],
  },
  {
    path: 'ft-list',
    component: FeaturedListComponent,
    canActivate: [AuthGuard],
    canDeactivate: [DeactivateGuard],
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'pipes',
    component: PipesExampleComponent,
  },
  {
    path: 'parent',
    component: ParentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'details',
    component: PostsnewComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'details/:id',
    component: PostDetailComponent,
  },
  {
    path: 'post-details',
    component: PostDetailComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'observable',
    component: ObservableComponent,
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
    PostDetailComponent,
    LoginComponent,
    PipesExampleComponent,
    ReversePipe,
    SqrootPipe,
    FileSizePipe,
    PowerPipe,
    RepeatPipe,
    ObservableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbPaginationModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
