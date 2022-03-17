import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() {
    // middleware chang han

   }

  ngOnInit(): void {
  }

  // define array data
  listProduct = [
    {"id":1,"name":"toi ten la","desc":"hehehhe","price":1000}
  ];

  newListProduct = this.listProduct;

  newProduct =     {"id":1,"name":"","desc":"","price":0};

  // submit
  onSubmit(formData:any){
    if(!formData.name || !formData.desc || !formData.price){
      alert("nhap day du di roi them vl");
      return;
    }
    
    // check edit
    if(this.flag){
      for(let i=0; i< this.listProduct.length ;i++){
        if(this.listProduct[i].id == this.newProduct.id){
          this.listProduct[i] = this.newProduct;
        }
      }
      this.flag = false;
    }else{
      // id auto increase
      formData.id = this.listProduct.length + 1;
      this.listProduct.push(formData);
    }

    // clear input
    this.newProduct = {"id":1,"name":"","desc":"","price":0};
  }

  // edit
  flag = false;
  edit(obj: any){
    this.flag = true;

    this.newProduct = obj;
  }

  // remove
  remove(id:number){
     this.newListProduct.forEach((val,index)=>{
      if(val.id == id){
        // remove
        this.newListProduct.splice(index,1);
      }
    });
  }


}
