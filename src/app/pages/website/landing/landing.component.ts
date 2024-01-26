import { Component,OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit{

  navigateToProducts(id: number){
    this.router.navigate(['/products', id])
  }
  productList: any[] = [];
  categoryList: any[] = [];
  constructor(private productServ: ProductService, private router: Router){
    
  }

  ngOnInit(): void {
      this.getAllProducts();
      this.getAllCategory();
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
