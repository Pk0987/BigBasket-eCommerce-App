import { Component } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'web-product-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './web-product.component.html',
  styleUrl: './web-product.component.css'
})
export class WebProductComponent {

  productList: any[] = [];
  categoryList: any[] = [];
  constructor(private productServ: ProductService, private router: Router){
    
  }

  ngOnInit(): void {
      this.getAllProducts();
      this.getAllCategory();
  }
  navigateToProducts(id:number){
    this.router.navigate(['/products',id])
  }

  getAllProducts(){
    this.productServ.getProducts().subscribe((res:any)=>{
      debugger;
      this.productList = res.data;
    })
  }
  getAllCategory(){
    this.productServ.getCategory().subscribe((res:any)=>{
      this.categoryList = res.data;
    })
  }
}
