import {Component, Input, OnInit} from '@angular/core';
import {Color} from '../entities/color';

@Component({
  selector: 'app-change-color',
  templateUrl: './change-color.component.html',
  styleUrls: ['./change-color.component.css']
})
export class ChangeColorComponent implements OnInit {

@Input() color: Color;
  title: string;
  clickBtnA: boolean;
  clickBtnB: boolean;

  constructor() {
    this.title = "";
    this.color = new Color();
    this.clickBtnA = false;
    this.clickBtnB = false;
  }

  changeColor(): void{
    this.clickBtnA = !this.clickBtnA;
  }

  changeBackgroundColor(): void{
    this.clickBtnB = !this.clickBtnB;
  }

  ngOnInit() {
  }

}
