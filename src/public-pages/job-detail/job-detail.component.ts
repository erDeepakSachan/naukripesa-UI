import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { themeLoad } from '../shared/theme-util'
import { ActivatedRoute } from '@angular/router';
import { JobDetailService } from './job-detail.service';
import { Jobdetail } from '../../pages/page-entities/jobdetail.entity';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-job-detail',
  imports: [],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css'
})
export class JobDetailComponent implements OnInit {
  data: any;
  //data: Jobdetail[] = [];
  companyId!: number; 
  constructor(private route: ActivatedRoute, public svc: JobDetailService) {

  }

  ngOnInit() {
    themeLoad();
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      console.log('ID:', id);
      let handle = this.svc.get(id);
      handle.subscribe(resp => {
        debugger;
        this.data = resp;
        console.log(this.data.companyId)
      })
    });
    //this.load();
  }

}
