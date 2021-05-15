import { Component, OnInit, Input } from '@angular/core';

import { RestService } from '../Services/rest.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../Models/Product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  @Input() productData: Product = new Product('', '', '', 0);

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addProduct() {
    console.log('Product Data: ', this.productData);

    this.rest.addProduct(this.productData).subscribe((result: Product) => {
      this.router.navigate(['/']);
    }, (err) => {
      console.log(err);
    });
  }
}
