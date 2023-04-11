import { Component } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courses: Course[] = [
    { _id: '1', name: 'Hydrogen', category: 'H' },
    { _id: '2', name: 'Helium', category: 'He' },
    { _id: '3', name: 'Lithium', category: 'Li' },
    { _id: '4', name: 'Beryllium', category: 'Be' },
    { _id: '5', name: 'Boron', category: 'B' },
    { _id: '6', name: 'Carbon', category: 'C' },
    { _id: '7', name: 'Nitrogen', category: 'N' },
    { _id: '8', name: 'Oxygen', category: 'O' },
    { _id: '9', name: 'Fluorine', category: 'F' },
    { _id: '10', name: 'Neon', category: 'Ne' },
  ];
  displayedColumns = ['name', 'category'];

  constructor() {}
}
