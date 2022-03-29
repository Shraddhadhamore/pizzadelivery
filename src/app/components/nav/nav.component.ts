import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  uid='';
  public count : number=0;
  constructor(private router: Router, private cartservice: CartService) { }

  ngOnInit(): void {
    this.cartservice.getProducts()
    .subscribe(res=>{
      this.count = res.length;
    })

    
    
  }
  logout(){
    if(confirm("Do u want to logout ?")){
      localStorage.removeItem('_token');
      this.router.navigate(["/"])
    }
  }
}
