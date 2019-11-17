import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deploiment',
  templateUrl: './deploiment.component.html',
  styleUrls: ['./deploiment.component.css']
})
export class DeploimentComponent implements OnInit {

  coinwallet: string[] = ['wallet1', 'wallet2'];
  selectedwallet = this.coinwallet[0];

  constructor() { }

  ngOnInit() {
  }




}
