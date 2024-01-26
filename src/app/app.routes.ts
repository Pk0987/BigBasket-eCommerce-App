import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { WebProductComponent } from './pages/website/web-product/web-product.component';
import { CategoryProductsComponent } from './pages/website/category-products/category-products.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'Allproducts',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:LandingComponent,
        children:[
            {
                path:'Allproducts',
                component:WebProductComponent,
            },
            {
                path:'products/:id',
                component:CategoryProductsComponent
            },
        ]
    },
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'products',
                component:ProductsComponent
            },
            {
                path:'category',
                component:CategoriesComponent
            }
        ]

    }
];
