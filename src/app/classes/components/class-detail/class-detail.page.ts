import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassesService } from '../../services/classes.service';
import { Class } from '../../class.model';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.page.html',
  styleUrls: ['./class-detail.page.scss'],
})
export class ClassDetailPage implements OnInit {
  loadedClass: Class;

  constructor(
    private activatedRoute: ActivatedRoute,
    private classesService: ClassesService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (paramMap) => {
        if (!paramMap.has('classId')) {
          // redirect
          return;
        }
        const classId = paramMap.get('classId');
        this.loadedClass = this.classesService.getClass(classId);
      }
    );
  }

}
