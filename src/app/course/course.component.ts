import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
/*   template:`
        <p>
        course works!
        </p>
        <h3>List of Courses</h3>
        <ul>
          <li *ngFor="let course of courses">{{course}}</li>
        </ul>
  ` */
})
export class CourseComponent implements OnInit {
  courses;
  constructor(service : CourseService) {
    this.courses=service.getCourse()
   }
  ngOnInit() {
  }

}
