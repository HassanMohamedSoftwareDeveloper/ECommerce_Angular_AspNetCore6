import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productList!: any[];
  products: any[] = [];
  subTotal: number = 0;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (res: any) => {
        this.productList = res;
      },
      error: (error) => {
        alert(error);
      },
      complete: () => {
        console.log("Request Completed");
      }
    });
    this.productService.loadCart();
    this.products = this.productService.getProducts();
  }

  addToCart(product: any) {
    if (!this.productService.productInCart(product)) {
      product.quantity = 1;
      this.productService.addToCart(product);
      this.products = [...this.productService.getProducts()];
      this.subTotal = product.price
    }
  }

  changeSubtotal(product: any, index: any) {
    const qty = product.quantity;
    const amt = product.price;
    this.subTotal = amt * qty;

    this.productService.saveCart();
  }

  removeFromCart(product: any) {
    this.productService.removeProduct(product);
    this.products = this.productService.getProducts();
  }

  get total() {
    return this.products.reduce(

      (sum, product) => ({
        quantity: 1,
        price: sum.price + product.quantity * product.price
      }),
      {
        quantity: 1, price: 0
      }).price;
  }

  checkout() {
    localStorage.setItem('cart_total', JSON.stringify(this.total));
    this.router.navigate(["/payment"]);
  }
}
