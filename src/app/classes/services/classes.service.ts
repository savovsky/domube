import { Injectable } from '@angular/core';
import { Class } from '../class.model';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  private classes: Class[] = [
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

  getAllClasses() {
    return [...this.classes];
  }

  getClass(classId: string) {
    return {
      ...this.classes.find(el => el.id === classId)
    };
  }
}
