import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  proData:any;
  p: number = 1;
  constructor(private http:HttpClient, private cartservice: CartService) { }

  ngOnInit(): void {
    this.http.get("assets/products.json")
    .subscribe(res=>{
      if(res){
        console.log(res);
        this.proData=res;
      }
    })
  }
  
  addCart(pro: any){
    this.cartservice.addtoCart(pro);
    
  }

}
