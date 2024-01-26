import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  products$:Observable<any> | undefined;
  constructor(private productServ: ProductService){
    this.products$ = this.productServ.getCategory().pipe(
      map((item:any)=>{
        return item.data;
      })
    );
  }

  getAllCategory(){

}

}
