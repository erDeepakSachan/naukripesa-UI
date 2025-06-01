import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import {themeLoad} from '../shared/theme-util'

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    themeLoad();
  }

}
