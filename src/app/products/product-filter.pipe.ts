import { Pipe, PipeTransform } from "@angular/core";
import { IProduct } from "src/app/products/product";


@Pipe({
    name:'productFilter'
})

export class ProductFilterPipe implements PipeTransform{
    transform(value:IProduct[], filterBy:string) {
       filterBy =  filterBy ? filterBy.toLocaleLowerCase() : null;
       console.log("Filter by converted to lowercase :: ", filterBy);

        return filterBy ? value.filter((product:IProduct) => 
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;

    }

}

/// Value ::: list of all products
/// filterBy :: Input box text based on which we have to filter our products