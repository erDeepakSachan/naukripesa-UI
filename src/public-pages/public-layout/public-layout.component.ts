import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { themeLoad, customJs } from '../shared/theme-util'

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: [
    './public-layout.component.css',
    '../public-assets/css/bootstrap.min.css',
    '../public-assets/css/style.css',
    '../public-assets/css/versions.css',
    '../public-assets/css/responsive.css',
    '../public-assets/css/custom.css',
    '../public-assets/css/CustomCss.css',
  ],
  imports: [RouterModule, CommonModule],
})
export class PublicLayoutComponent implements OnInit, AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    themeLoad();
    if (typeof customJs?.initEvents === 'function') {
      customJs.initEvents();
    }
  }

  ngOnInit() {
  }

}
