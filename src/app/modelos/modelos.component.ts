import { Component, OnInit } from '@angular/core';
import { CochesService } from '../coches.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.css']
})
export class ModelosComponent implements OnInit {

  arrCoches: any[];
  arrCocheFiltrado: any[];

  constructor(private cochesService: CochesService) { }

  ngOnInit() {

    this.cochesService.getCoches()
      .then(response => {
        this.arrCoches = response;
        console.log(this.arrCoches);
      });
  }

  getModelo(pCoche) {
    this.arrCocheFiltrado = [];
    this.arrCocheFiltrado = pCoche;

    console.log(this.arrCocheFiltrado);
  }
}

