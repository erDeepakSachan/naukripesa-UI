import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobdetailService } from '../../pages/jobdetail/jobdetail.service';
import { Jobdetail } from '../../pages/page-entities/jobdetail.entity';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  data: Jobdetail[] = [];
  chunkedData: Jobdetail[][] = [];
  totalPageCount: number = 1;

  cityId: number | null = null;

  constructor(public svc: JobdetailService,private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      this.cityId = data["cityId"] ?? null;
      console.log('this.cityId',this.cityId);
    });
  }

  ngOnInit() {
    this.load();
  }

  load(pageNo: number = 0, pageSize: number = 40): void {
    let handle = this.svc.list(pageNo, pageSize, this.cityId?? undefined);
    handle.subscribe(resp => {
      const chunkSize = 4;
      this.data = resp.data;
      const filteredData = this.data.filter(item => item.JobDetailId !== 0).sort((a, b) => b.JobDetailId - a.JobDetailId);
      for (let i = 0; i < filteredData.length; i += chunkSize) {
        this.chunkedData.push(filteredData.slice(i, i + chunkSize));
      }
    });
  }
}