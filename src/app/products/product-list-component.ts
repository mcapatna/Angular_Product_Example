import {Component, OnInit} from '@angular/core';
import { IProduct } from './products';
@Component({
    selector: 'pm-products',
    templateUrl: './product-list-component.html',
    styleUrls:['./product-list-component.css']
})
export class ProductListComponent implements OnInit{

constructor(){
    this.filteredProducts=this.products;
    this.listFilter='cart';
}
    performFilter(fliterBy: string): IProduct[] {
        fliterBy=fliterBy.toLowerCase().trim();
        return this.products.filter((product:IProduct)=>
            product.productName.toLocaleLowerCase().indexOf(fliterBy)!=-1);
    }


    ngOnInit(): void {
       console.log('onInt called');
    }
    pageTitle:string='Product List';
    imageWidth:number=50;
    imageMargin:number=2;
    showImage:boolean=false;

    filteredProducts : IProduct[];
    _listFilter:string;
    get listFilter():string{
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter=value;
        this.filteredProducts=this.listFilter?this.performFilter(this.listFilter):this.products;
    }
    products: IProduct[]=[{
        "productId":2,
        "productName":"Garden Cart",
        "productCode":"GDN-0023",
        "releaseDate":"March 18, 2017",
        "description" :"15 gallon capacity rolling garden cart",
        "price":33.23,
        "starRating":4.2,
        "imageUrl":"https://openclipart.org/download/58471/garden-cart.svg"
    },{
        "productId":2,
        "productName":"Hammer",
        "productCode":"TBX-0048",
        "releaseDate":"May 21, 2017",
        "description" :"Curved claw steel hammer",
        "price":8.9,
        "starRating":4.8,
        "imageUrl":"https://openclipart.org/download/73/rejon-Hammer.svg"
    }
];
 toggleImage():void{
    this.showImage=!this.showImage;
 }
}