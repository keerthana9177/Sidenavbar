
import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProductsComponent } from './products/products.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AuthGuardService } from '../../guards/auth-guard.service';

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
		component: LayoutComponent,
		canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'layout', pathMatch: 'full' },
      { path: 'home', component: HomeComponent},
	  { path: 'about', component: AboutusComponent},
	  { path: 'gallery', component: GalleryComponent},
	  { path: 'products', component: ProductsComponent },
		{ path: 'contact', component: ContactusComponent },
		
    ]
  }
];
