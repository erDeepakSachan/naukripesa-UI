import { Component, OnInit, ViewChild, ElementRef, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Jobdetail } from '../page-entities/jobdetail.entity';
import { JobdetailService } from './jobdetail.service';
import { CommonModule, DatePipe  } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EditComponent } from './jobdetail.component.edit';
import { AddComponent } from './jobdetail.component.add';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './../../pagination/pagination.component';
import { hideShowModal } from './../../shared/jquery-utils';

@Component({
  imports: [CommonModule, RouterModule, EditComponent, AddComponent, PaginationComponent, FormsModule],
  selector: 'app-jobdetail',
  templateUrl: './jobdetail.component.html',
  styleUrls: ['./jobdetail.component.css'],
  providers: [DatePipe]
})
export class JobdetailComponent implements OnInit {
  data: Jobdetail[] = [];
  selectedData: Jobdetail | null = null;
  @ViewChild('editModal', { static: false }) editComponent!: EditComponent;
  @ViewChild('addModal', { static: false }) addComponent!: AddComponent;
  @ViewChild('paginationMobile') paginationMobile!: PaginationComponent;
  @ViewChild('paginationDesktop') paginationDesktop!: PaginationComponent;
  totalPageCount: number = 1;
  searchText: string = '';

  constructor(public svc: JobdetailService, private datePipe: DatePipe) {
  }

  ngOnInit() {
    this.load();
  }

  load(pageNo: number = 0, fromPager: boolean = false): void {
    let handle = this.svc.list(pageNo);
    if (this.searchText != '') {
      handle = this.svc.search(this.searchText);
    }
    handle.subscribe(resp => {
      this.data = resp.data.sort((a, b) => b.JobDetailId - a.JobDetailId);
      this.totalPageCount = resp.totalPageCount;
      if (!fromPager) {
        this.paginationMobile.reInitPagination(this.totalPageCount);
        this.paginationDesktop.reInitPagination(this.totalPageCount);
      }
    });
  }

  _new(): void {
    this.addComponent.loadForm();
  }

  edit(obj: Jobdetail): void {
    this.selectedData = { ...obj };
    debugger;
    this.selectedData.InterviewDate = this.datePipe.transform(this.selectedData.InterviewDate, 'yyyy-MM-dd');
    this.editComponent.loadForm(this.selectedData);
  }

  delete(id: number): void {
    if (confirm('Are you sure you want to delete this jobdetail?')) {
      this.svc.delete(id).subscribe((resp) => {
        alert(resp.message);
        this.load();
      });
    }
  }

  onShouldRefresh(yes: boolean) {
    this.load();
  }

  onPageChange(pageNo: number) {
    this.load(pageNo, true);
  }

  handleKeyup(event: any) {
    if (event.which == 13) {
      this.load();
    }
    if (event.which == 27) {
      this.clearSearch();
    }
  }

  clearSearch() {
    this.searchText = '';
    this.load();
  }
}
