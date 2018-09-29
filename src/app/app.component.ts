import { Component } from '@angular/core';
import {listColor} from './app/data/listColor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listColor = listColor;
}
