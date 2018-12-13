import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'heart-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  
  liked=0;
  isLiked:boolean;
  onclickLike(){
    this.isLiked = !this.isLiked
    if(this.isLiked)this.liked++;
    else this.liked--;
  }
  constructor() { }
  ngOnInit() {
  }

}
