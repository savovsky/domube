import { Component, OnInit } from '@angular/core';
import { Class } from '../../class.model';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.page.html',
  styleUrls: ['./classes.page.scss'],
})
export class ClassesPage implements OnInit {
  classes: Class[] = [
    {
      id: 'math',
      title: 'Math',
      imageUrl: '../../assets/images/pic.jpg'
    },
    {
      id: 'bel',
      title: 'BEL',
      imageUrl: '../../assets/images/pic.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
