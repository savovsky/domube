import { Component, OnInit } from '@angular/core';
import { Class } from './classes.model';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.page.html',
  styleUrls: ['./classes.page.scss'],
})
export class ClassesPage implements OnInit {
  classes: Class[] = [
    {
      id: '1',
      title: 'Math',
      imageUrl: '../../assets/images/pic.jpg'
    },
    {
      id: '2',
      title: 'BEL',
      imageUrl: '../../assets/images/pic.jpg'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
