import { Injectable } from '@angular/core';
import { Clas } from '../clas.model';

@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  private clases: Clas[] = [
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

  getAllClases() {
    return [...this.clases];
  }

  getClas(clasId: string) {
    return {
      ...this.clases.find(el => el.id === clasId)
    };
  }
}
