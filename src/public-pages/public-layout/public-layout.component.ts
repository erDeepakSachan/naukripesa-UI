import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import { CommonModule } from '@angular/common';

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
export class PublicLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
