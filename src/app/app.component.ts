import { Component } from '@angular/core';
import { FavouriteChangeEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MINION WORLD';

  post = {
    title:"Title",
    isFav:true
  }
  tweet={
    body:'body of tweet',
    isLiked:false,
    likeCount:0
  }
  onFavoriteChange(eventArgs:FavouriteChangeEventArgs){
    console.log("Favourite target is clicked",eventArgs);
  }
}
