import { Component } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent {
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

  course=[1,2,3,4];

  viewMode="map";
  newRowcount=4
  newCourse =[
    {name: "course1",id:101},
    {name: "course2",id:102},
    {name: "course3",id:103}
  ]
  AddNewRow(){
    let newRow={name:"course"+this.newRowcount,id:100+this.newRowcount};
    this.newCourse.push(newRow);
    this.newRowcount++;
  }
  removeRow(course){
    this.newCourse.splice(this.newCourse.indexOf(course),1);
  } 
}
