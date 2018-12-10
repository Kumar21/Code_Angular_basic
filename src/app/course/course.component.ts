import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  courses;
  targetvalue="";
  email1= "Shanu@gmail.com";
  isActiveClassBinding = true;
  imageurl = "https://upload.wikimedia.org/wikipedia/en/7/7d/Minions_characters.png";
  wikkiImage = "https://en.wikipedia.org/static/favicon/wikipedia.ico"
  courseData={
    title : "The component Angular courses",
    rating :4.4546,
    students : 36548,
    price : 1355.15,
    releaseDAte : new Date(2016,3,1)
  }
  PipesText ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  onDivClicked() {
    console.log("div element is clicked");
  }

  onSave($event) {
    //to stop event bubblink(calling all the parent attribute event)
    $event.stopPropagation();
    console.log("Button event applied", $event);
  }

  onKeyUpEvent($event) {
    if ($event.keyCode === 13)
      console.log("Enter is pressed");
  }
  onKeyUp(){
    console.log("Enter is pressed angular event");
  }

  onKeyUpEmail(email){
    console.log("You typed"+email);
  }
  onKeyUpEventValue($event){
    this.targetvalue=$event.target.value;
    if($event.keyCode===13)
    console.log("You typed"+$event.target.value);
  }
  onKeyUpTowWay(){
  console.log(this.email1); 
  }
  constructor(service: CourseService) {
    this.courses = service.getCourse()
  }
  ngOnInit() {
  }

}
