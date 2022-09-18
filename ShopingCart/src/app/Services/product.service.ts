import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: any[] = [];
  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get('/assets/data.json');
  }

  getProducts() {
    return this.products;
  }

  saveCart() {
    localStorage.setItem("cart_items", JSON.stringify(this.products));
  }

  addToCart(addedProduct: any) {
    this.products.push(addedProduct);
    this.saveCart();
  }

  loadCart() {
    this.products = JSON.parse(localStorage.getItem("cart_items") as any) || [];
  }

  productInCart(product: any) {
    return this.products.findIndex((x: any) => x.id === product.id) > -1;
  }

  removeProduct(product: any) {
    const index = this.products.findIndex((x: any) => x.id === product.id);

    if (index > -1) {
      this.products = this.products.slice(index, 1);
      this.saveCart();
    }
  }

  clearProducts() {
    localStorage.clear();
  }
}
