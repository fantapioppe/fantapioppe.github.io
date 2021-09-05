import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regolamento',
  templateUrl: './regolamento.page.html',
  styleUrls: ['./regolamento.page.scss'],
})
export class RegolamentoPage implements OnInit {

  carteHidden = [ true, true, true, true, true, true, true, true];

  constructor() { }

  ngOnInit() {
  }

}
