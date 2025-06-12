import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobDetailService } from './job-detail.service';
import { Jobdetail, emptyJobdetail } from '../../pages/page-entities/jobdetail.entity';
import { CommonModule } from '@angular/common';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-job-detail',
  imports: [CommonModule],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css'
})
export class JobDetailComponent implements OnInit {
  data: Jobdetail = emptyJobdetail();
  companyId!: number;
  constructor(private route: ActivatedRoute, public svc: JobDetailService) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      console.log('ID:', id);
      let handle = this.svc.get(id);
      handle.subscribe(resp => {
        debugger;
        this.data = resp.data;
        console.log(this.data.CompanyId)
      })
    });
  }

  isFutureOrToday(dateStr: string | Date): boolean {
    const today = new Date();
    const date = new Date(dateStr);

    // Reset time parts to 0 for accurate date-only comparison
    today.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);

    return date >= today;
  }

  formatInterviewTime(time: string): string {
    if (!time) return '';

    // Parse the time (assuming "HH:mm" format)
    const [hourStr, minuteStr] = time.split(':');
    let hour = parseInt(hourStr, 10);
    const minutes = minuteStr.padStart(2, '0');

    const suffix = hour >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hour = hour % 12 || 12;

    return `${hour}:${minutes} ${suffix}`;
  }

}
