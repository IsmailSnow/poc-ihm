import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deploiment',
  templateUrl: './deploiment.component.html',
  styleUrls: ['./deploiment.component.css']
})
export class DeploimentComponent implements OnInit {

  public isDeploimentUR = true;
  public isDeploimentPRC = false;
  public isDeploimentSOLAR = false;


  constructor() { }

  ngOnInit() {
  }

  handleUR() {
    this.isDeploimentUR = true;
    this.isDeploimentSOLAR = false;
    this.isDeploimentPRC = false;
  }

  handlePRC() {
    this.isDeploimentUR = false;
    this.isDeploimentSOLAR = false;
    this.isDeploimentPRC = true;
  }

  handleSOLAR() {
    this.isDeploimentUR = false;
    this.isDeploimentSOLAR = true;
    this.isDeploimentPRC = false;
  }




}
