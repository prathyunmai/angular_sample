import { Component, OnChanges, Input } from "@angular/core";


@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges{
  
    @Input() rating:number;
    starWidth:number;

    ngOnChanges(): void {
       this.starWidth = this.rating * 70/5;
       console.log("the calculated star width:: ", this.starWidth);
    }
}