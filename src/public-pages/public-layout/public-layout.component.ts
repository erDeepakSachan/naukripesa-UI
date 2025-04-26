import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.css'],
  imports: [RouterOutlet, CommonModule],
})
export class PublicLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
