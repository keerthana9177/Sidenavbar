import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProductsComponent } from './products/products.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RouterModule } from '@angular/router';
import { dashboardRoutes } from './dashboard.routes';
import { AuthGuardService } from '../../guards/auth-guard.service';
@NgModule({
  declarations: [
    
  
    LayoutComponent,
            HomeComponent,
            AboutusComponent,
            GalleryComponent,
            ProductsComponent,
            ContactusComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  providers: [AuthGuardService],
  
})
export class DashboardModule { }
