import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { DescriptifDto } from 'src/app/models/DescriptifDto';

@Component({
  selector: 'app-deploiment-edit',
  templateUrl: './deploiment-edit.component.html',
  styleUrls: ['./deploiment-edit.component.css']
})
export class DeploimentEditComponent implements OnInit {


  inputList = [];
  contextList = [];
  briqueList = [];
  composantList = [];
  versionList = [];
  description: DescriptifDto[] = new Array();

  public isCollapsedTwo = false;
  public isCollapsedOne = false;


  contexteDisabled: Boolean = true;
  briqueDisabled: Boolean = true;
  composantDisabled: Boolean = true;
  versionDisabled: Boolean = true;

  displayParameter: string;
  selectedContexte: string;
  selectedbrique: string;
  selectedComposant: string;
  selectedVersion: string;

  placeholder: any;

  constructor() { }

  ngOnInit() {
  this.contextList = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  this.briqueList = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  this.composantList = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  this.versionList = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  this.inputList = ['One', 'Two', 'Three', 'Four'];
  }
  handleInputChange() {
   console.log(this.displayParameter);
   if (this.displayParameter !== undefined) {
      this.resetComposant();
      this.resetVersions();
      this.contexteDisabled = false;
      this.briqueDisabled = false;
      this.versionDisabled = true;
      this.composantDisabled = true;
   }
  }
  handleContexteChange() {
  console.log(this.selectedContexte);
  if (this.selectedContexte !== undefined) {
    this.briqueDisabled = false ;
    this.resetVersions();
    this.versionDisabled = true;
  }
  }

  handleBriqueChange() {
    console.log(this.selectedbrique);
    if (this.selectedbrique !== undefined && this.selectedContexte !== undefined) {
      this.composantDisabled = false ;
      this.loadComposant();
      this.resetVersions();
      this.versionDisabled = true;
     }
  }

  handleComposantChange() {
      console.log(this.selectedComposant);
      if (this.selectedComposant !== undefined) {
        this.versionDisabled = false ;
        this.loadVersions();
      }
  }

  handleVersionChange() {
      console.log(this.selectedVersion);
      this.description.push({ contexte : this.selectedContexte , description : 'test' });
  }

  submitForm() {
  }

  resetComposant() {
    this.composantList = [];
  }

  resetVersions() {
    this.versionList = [];
  }
  loadComposant() {
    this.composantList = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  }
  loadVersions() {
    this.versionList = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  }

}
