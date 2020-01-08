import { Component, OnInit } from "@angular/core";
import { IProduct } from "src/app/products/product";


@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})

export class ProductListComponent implements OnInit{

    
    //int age = 10;
    //var age = 10; let age = 10

    age:number = 10;

    pageTitle:string = "Product List Page @@@@@";

    isActive:boolean = true;
    imageWidth:number = 150;
    imageMargin:number = 10;

    showImage:boolean = false;

    listFilter:string;

    products:IProduct[] = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 9.95,
            "starRating": 3.5,
            "imageUrl": "https://cdn.pixabay.com/photo/2017/11/03/21/22/rake-2915742_960_720.jpg"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "https://images.homedepot-static.com/productImages/b2a0e937-99b7-40bb-a567-8b11a2eb63ef/svn/sontax-yard-carts-73599-64_1000.jpg"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "https://image.shutterstock.com/image-vector/colorful-cartoon-claw-hammer-handyman-260nw-1119415058.jpg"
        }
    ]

    ngOnInit(): void {
        console.log('Ng OnInit is called');
     }

    toggleImage():void{
        console.log("Initial Value :: ", this.showImage);
        this.showImage = !this.showImage;

        console.log("Changed Value :: ", this.showImage);
    }

   
    //we can create custom data types in Angular
}