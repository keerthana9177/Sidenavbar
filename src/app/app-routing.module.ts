import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '', component: AppComponent,
  //   children: [
  //     {
  //       path: 'home',component: HomeComponent,
  //     },
  //     {
  //       path: 'about',component: AboutUsComponent,
  //     },
  //     {
  //       path: 'gallery',component: GalleryComponent,
  //     },
  //     {
  //       path: 'products',component: ProductsComponent,
  //     },
  //     {
  //       path: 'contact',component: ContactUsComponent,
  //     },
  //     {
  //       path: 'layout',component: LayoutComponent,
  //     },
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
