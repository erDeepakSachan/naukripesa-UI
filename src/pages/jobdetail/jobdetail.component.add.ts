import { Component, ElementRef, EventEmitter, ViewChild, Input, inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Observable, of, finalize, BehaviorSubject } from 'rxjs';
import { Jobdetail, emptyJobdetail } from '../page-entities/jobdetail.entity';
import { DdlItem } from '../page-entities/ddl-item.entity';
import { JobdetailService } from './jobdetail.service';
import { jQ, hideShowModal, validateForm, removeValidationErrors } from './../../shared/jquery-utils';


@Component({
  imports: [CommonModule, FormsModule],
  selector: 'add-modal',
  template: `
        <div #modal class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="display: none;">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header box-header well">
                    <h2 class="modal-title" id="model-title-h2"><i class="fa fa-plus"></i> Add New Jobdetail</h2>
                    <div class="box-icon">
                        <a href="#" data-dismiss="modal" data-neo-modal="true" class="btn btn-close btn-round btn-default">
                            <i class="glyphicon glyphicon-remove"></i>
                        </a>
                    </div>
                </div>
                <form #neoAddForm="ngForm" (submit)="onSubmit(neoAddForm)" class="box neo-add-form" novalidate>
                <div class="modal-body">
                <div class="row edit-form-field-container">
                    
                

                <div class="col-lg-12">
                  <div class="form-group">
                    <label>Company <span class="field-validation-valid" data-valmsg-for="CompanyId" data-valmsg-replace="true"></span>
                    </label>
                    <select [(ngModel)]="obj.CompanyId" name="CompanyId" class="form-control" data-val="true" data-val-range="The Company field is required." data-val-required="The Company field is required." data-val-range-min="1" data-val-range-max="999999">
                      <option value="0">--SELECT--</option>
                      <option value="{{item.Value}}" *ngFor="let item of companyList">{{item.Text}}</option>
                    </select>
                  </div>
                </div>
                

                <div class="col-lg-12">
                  <div class="form-group">
                    <label>Job Location <span class="field-validation-valid" data-valmsg-for="JobLocationId" data-valmsg-replace="true"></span>
                    </label>
                    <!-- <input [(ngModel)]="obj.JobLocationId" type="text" name="JobLocationId" placeholder="JobLocationId" class="form-control" data-val="true" data-val-required="The JobLocationId field is required." autocomplete="off" /> -->
                    <select [(ngModel)]="obj.JobLocationId" name="JobLocationId" class="form-control">
                      <option value="0">--SELECT--</option>
                      <option value="{{ item.Value }}" *ngFor="let item of jobLocationList" >
                        {{ item.Text }}
                      </option>
                    </select>
                  </div>
                </div>
                

                <div class="col-lg-12">
                  <div class="form-group">
                    <label>Interview Date <span class="field-validation-valid" data-valmsg-for="InterviewDate" data-valmsg-replace="true"></span>
                    </label>
                    <input [(ngModel)]="obj.InterviewDate" type="date" name="InterviewDate" placeholder="InterviewDate" class="form-control" data-val="true" data-val-required="The InterviewDate field is required." autocomplete="off" />
                  </div>
                </div>
                

                <div class="col-lg-12">
                  <div class="form-group">
                    <label>Interview Time <span class="field-validation-valid" data-valmsg-for="InterviewTime" data-valmsg-replace="true"></span>
                    </label>
                    <input [(ngModel)]="obj.InterviewTime" type="time" name="InterviewTime" placeholder="InterviewTime" class="form-control" data-val="true" data-val-required="The InterviewTime field is required." autocomplete="off" />
                  </div>
                </div>
                

                <div class="col-lg-12">
                  <div class="form-group">
                    <label>Interview Location <span class="field-validation-valid" data-valmsg-for="InterviewLocation" data-valmsg-replace="true"></span>
                    </label>
                    <input [(ngModel)]="obj.InterviewLocation" type="text" name="InterviewLocation" placeholder="InterviewLocation" class="form-control" data-val="true" data-val-required="The InterviewLocation field is required." autocomplete="off" />
                  </div>
                </div>
                

                <div class="col-lg-12">
                  <div class="form-group">
                    <label>Qualification <span class="field-validation-valid" data-valmsg-for="Qualification" data-valmsg-replace="true"></span>
                    </label>
                    <input [(ngModel)]="obj.Qualification" type="text" name="Qualification" placeholder="Qualification" class="form-control" data-val="true" data-val-required="The Qualification field is required." autocomplete="off" />
                  </div>
                </div>
                

                <div class="col-lg-12">
                  <div class="form-group">
                    <label>Contact Number <span class="field-validation-valid" data-valmsg-for="ContactNumber" data-valmsg-replace="true"></span>
                    </label>
                    <input [(ngModel)]="obj.ContactNumber" type="text" name="ContactNumber" placeholder="ContactNumber" class="form-control" data-val="true" data-val-required="The ContactNumber field is required." autocomplete="off" />
                  </div>
                </div>
                

                <div class="col-lg-12">
                  <div class="form-group">
                    <label>Department <span class="field-validation-valid" data-valmsg-for="Department" data-valmsg-replace="true"></span>
                    </label>
                    <input [(ngModel)]="obj.Department" type="text" name="Department" placeholder="Department" class="form-control" data-val="true" data-val-required="The Department field is required." autocomplete="off" />
                  </div>
                </div>
                

                <div class="col-lg-12">
                  <div class="form-group">
                    <label>Other Detail <span class="field-validation-valid" data-valmsg-for="OtherDetail" data-valmsg-replace="true"></span>
                    </label>
                    <input [(ngModel)]="obj.OtherDetail" type="text" name="OtherDetail" placeholder="OtherDetail" class="form-control" data-val="true" data-val-required="The OtherDetail field is required." autocomplete="off" />
                  </div>
                </div>
                </div>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-default btn-flat fa fa-times" data-dismiss="modal">&nbsp;&nbsp;&nbsp;Close</button>
                <button type="submit" class="btn btn-info btn-flat fa fa-save">&nbsp;&nbsp;&nbsp;Save changes</button>
                </div>
                <div *ngIf="api.loading$ | async" class="overlay"></div>
                <div *ngIf="api.loading$ | async" class="loading-img"></div>
                </form>
            </div>
        </div>
        </div> 
  `})
export class AddComponent {
  @ViewChild('neoAddForm', { read: ElementRef }) formElement!: ElementRef;
  @ViewChild('modal', { static: false }) modal!: ElementRef;
  @Output() shouldRefresh = new EventEmitter<boolean>();
  @Input() obj: Jobdetail = emptyJobdetail();

  api = inject(JobdetailService);
  companyList: DdlItem[] = [];
  jobLocationList: DdlItem[] = [];
  private getModal(): HTMLElement {
    return this.modal.nativeElement;
  }

  loadForm(): void {
    removeValidationErrors(this.formElement);
    this.obj = emptyJobdetail();
    hideShowModal(this.getModal(), 'show');
    this.api.loadDropDownList('App.Service.CompanyService', '0').subscribe(resp => {
      this.companyList = resp;
    });
    this.api.loadDropDownList('App.Service.JoblocationService', '0').subscribe(resp => {
      this.jobLocationList = resp;
    });
  }

  onSubmit(form: NgForm): void {
    var isValid = validateForm(this.formElement)
    if (isValid) {
      debugger;
      this.obj.JobDetailId = 0;
      delete this.obj.JobLocation;
      delete this.obj.Company;
      this.api.add(this.obj).subscribe((resp) => {
        alert(resp.message);
        hideShowModal(this.getModal(), 'hide');
        this.shouldRefresh.emit(true);
      });
    }
  }
}