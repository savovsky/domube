import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClasesService } from '../../services/clases.service';
import { Clas } from '../../clas.model';

@Component({
  selector: 'app-clas-detail',
  templateUrl: './clas-detail.page.html',
  styleUrls: ['./clas-detail.page.scss'],
})
export class ClasDetailPage implements OnInit {
  loadedClas: Clas;

  constructor(
    private activatedRoute: ActivatedRoute,
    private clasesService: ClasesService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (paramMap) => {
        if (!paramMap.has('clasId')) {
          // redirect
          return;
        }
        const clasId = paramMap.get('clasId');
        this.loadedClas = this.clasesService.getClas(clasId);
      }
    );
  }

}
