import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// define data type
type PRODUCT_ITEM_TYPE =
  | {
      id: number;
      name: string;
      desc: string;
      price: number;
    }
  | undefined;

type PRODUCT_TYPE = PRODUCT_ITEM_TYPE[];

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  private id: any = null;
  constructor(private routes: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.routes.snapshot.paramMap.get('id');
    this.productDetail = this.listProduct.find((item) =>{
      return item?.id==this.id;
    });
  }

  // define array data
  listProduct: PRODUCT_TYPE = [
    { id: 1, name: 'toi ten la', desc: 'hehehhe', price: 1000 },
    { id: 2, name: 'toi ten la', desc: 'hehehhe', price: 1000 },
  ];

  productDetail: PRODUCT_ITEM_TYPE = this.listProduct.find(
    (pro) => pro?.id == this.id
  );
}
