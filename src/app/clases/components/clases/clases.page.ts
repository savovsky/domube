import { Component, OnInit } from '@angular/core';
import { ClasesService } from '../../services/clases.service';
import { Clas } from '../../clas.model';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.page.html',
  styleUrls: ['./clases.page.scss'],
})
export class ClasesPage implements OnInit {

  clases: Clas[];

  constructor(private clasesService: ClasesService) { }

  ngOnInit() {
    this.clases = this.clasesService.getAllClases();
  }

}
