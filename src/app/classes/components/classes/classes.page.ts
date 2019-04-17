import { Component, OnInit } from '@angular/core';
import { ClassesService } from '../../services/classes.service';
import { Class } from '../../class.model';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.page.html',
  styleUrls: ['./classes.page.scss'],
})
export class ClassesPage implements OnInit {

  classes: Class[];

  constructor(private classesService: ClassesService) { }

  ngOnInit() {
    this.classes = this.classesService.getAllClasses();
  }

}
