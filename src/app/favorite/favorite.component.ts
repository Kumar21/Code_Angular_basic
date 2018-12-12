import { Component, OnInit ,Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input('is-fav')isFav:boolean;
  @Output() change= new EventEmitter;
  constructor() { }

  ngOnInit() {
  }
  onFavClick(){
    this.isFav=!this.isFav;
    this.change.emit({newValue:this.isFav});
  }
}
export interface FavouriteChangeEventArgs{
  name:"kumar"
}