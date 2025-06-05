import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { themeLoad } from '../shared/theme-util'
import { ActivatedRoute } from '@angular/router';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-job-detail',
  imports: [],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css'
})
export class JobDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    themeLoad();
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      console.log('ID:', id);
    });
    //this.load();
  }

}
