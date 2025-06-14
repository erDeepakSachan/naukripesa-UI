import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobDetailService } from './job-detail.service';
import { Jobdetail, emptyJobdetail } from '../../pages/page-entities/jobdetail.entity';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-job-detail',
  imports: [CommonModule],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css'
})
export class JobDetailComponent implements OnInit {
  currentUrl: string = window.location.href;
  data: Jobdetail = emptyJobdetail();
  companyId!: number;
  constructor(private route: ActivatedRoute, public svc: JobDetailService, private meta: Meta, private titleService: Title) {

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

    this.titleService.setTitle('Where your next job awaits.');
    this.meta.addTags([
      { property: 'og:url', content: window.location.href },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Where your next job awaits.' },
      { property: 'og:description', content: 'We provide latest job opening free of cost.' },
      { property: 'og:image', content: 'https://www.naukripesa.com/images/blog_1.jpg' }
    ]);

    this.loadFacebookSDK();

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

  shareOnTelegram() {
    const content = (document.getElementById('tableData')?.innerText || '').trim();
    const message = encodeURIComponent(`${content}\nVisit our website for more jobs\nhttps://naukripesa.com/`);
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(this.currentUrl)}&text=${message}`;
    window.open(telegramUrl, '_blank');
  }

  shareOnWhatsApp() {
    const content = (document.getElementById('tableData')?.innerText || '').trim();
    const message = encodeURIComponent(`${content}\nVisit our website for more jobs\nhttps://naukripesa.com/`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  }

  loadFacebookSDK() {
    if (document.getElementById('facebook-jssdk')) return;

    const script = document.createElement('script');
    script.id = 'facebook-jssdk';
    script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0';
    document.body.appendChild(script);
  }

}
