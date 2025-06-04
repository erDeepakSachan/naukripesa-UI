import { Component, ElementRef, EventEmitter, ViewChild, Input, inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Observable, of, finalize, BehaviorSubject } from 'rxjs';
import { Company, emptyCompany } from '../page-entities/company.entity';
import { DdlItem } from '../page-entities/ddl-item.entity';
import { CompanyService } from './company.service';
import { jQ, hideShowModal, validateForm, removeValidationErrors } from './../../shared/jquery-utils';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'edit-modal',
  template: `
<div #modal class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="display: none;">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header box-header well">
        <h2 class="modal-title" id="model-title-h2">
          <i class="fa fa-edit"></i> Edit Company
        </h2>
        <div class="box-icon">
          <a href="#" data-dismiss="modal" data-neo-modal="true" class="btn btn-close btn-round btn-default">
            <i class="glyphicon glyphicon-remove"></i>
          </a>
        </div>
      </div>
      <form #neoEditForm="ngForm" (submit)="onSubmit(neoEditForm)" class="box neo-edit-form" novalidate="novalidate">
        <div class="modal-body">
          <div class="row edit-form-field-container">
            
                <div class="col-lg-12">
                  <div class="form-group">
                    <label>CompanyId <span class="field-validation-valid" data-valmsg-for="CompanyId" data-valmsg-replace="true"></span>
                    </label>
                    <input [(ngModel)]="obj.CompanyId" type="text" name="CompanyId" placeholder="CompanyId" class="form-control" data-val="true" data-val-required="The CompanyId field is required." autocomplete="off" />
                  </div>
                </div>
                

                <div class="col-lg-12">
                  <div class="form-group">
                    <label>CurrencyId <span class="field-validation-valid" data-valmsg-for="CurrencyId" data-valmsg-replace="true"></span>
                    </label>
                    <input [(ngModel)]="obj.CurrencyId" type="text" name="CurrencyId" placeholder="CurrencyId" class="form-control" data-val="true" data-val-required="The CurrencyId field is required." autocomplete="off" />
                  </div>
                </div>
                

                <div class="col-lg-12">
                  <div class="form-group">
                    <label>Name <span class="field-validation-valid" data-valmsg-for="Name" data-valmsg-replace="true"></span>
                    </label>
                    <input [(ngModel)]="obj.Name" type="text" name="Name" placeholder="Name" class="form-control" data-val="true" data-val-required="The Name field is required." autocomplete="off" />
                  </div>
                </div>
                

                <div class="col-lg-12">
                  <div class="form-group">
                    <label>Description <span class="field-validation-valid" data-valmsg-for="Description" data-valmsg-replace="true"></span>
                    </label>
                    <input [(ngModel)]="obj.Description" type="text" name="Description" placeholder="Description" class="form-control" data-val="true" data-val-required="The Description field is required." autocomplete="off" />
                  </div>
                </div>
                

                <div class="col-lg-12">
                  <div class="form-group">
                    <label>CreatedBy <span class="field-validation-valid" data-valmsg-for="CreatedBy" data-valmsg-replace="true"></span>
                    </label>
                    <input [(ngModel)]="obj.CreatedBy" type="text" name="CreatedBy" placeholder="CreatedBy" class="form-control" data-val="true" data-val-required="The CreatedBy field is required." autocomplete="off" />
                  </div>
                </div>
                

                <div class="col-lg-12">
                  <div class="form-group">
                    <label>CreatedOn <span class="field-validation-valid" data-valmsg-for="CreatedOn" data-valmsg-replace="true"></span>
                    </label>
                    <input [(ngModel)]="obj.CreatedOn" type="text" name="CreatedOn" placeholder="CreatedOn" class="form-control" data-val="true" data-val-required="The CreatedOn field is required." autocomplete="off" />
                  </div>
                </div>
                

                <div class="col-lg-12">
                  <div class="form-group">
                    <label>ModifiedBy <span class="field-validation-valid" data-valmsg-for="ModifiedBy" data-valmsg-replace="true"></span>
                    </label>
                    <input [(ngModel)]="obj.ModifiedBy" type="text" name="ModifiedBy" placeholder="ModifiedBy" class="form-control" data-val="true" data-val-required="The ModifiedBy field is required." autocomplete="off" />
                  </div>
                </div>
                

                <div class="col-lg-12">
                  <div class="form-group">
                    <label>ModifiedOn <span class="field-validation-valid" data-valmsg-for="ModifiedOn" data-valmsg-replace="true"></span>
                    </label>
                    <input [(ngModel)]="obj.ModifiedOn" type="text" name="ModifiedOn" placeholder="ModifiedOn" class="form-control" data-val="true" data-val-required="The ModifiedOn field is required." autocomplete="off" />
                  </div>
                </div>
                

                <!-- <div class="col-lg-12">
                  <div class="form-group">
                    <label>Currency <span class="field-validation-valid" data-valmsg-for="Currency" data-valmsg-replace="true"></span>
                    </label>
                    <input [(ngModel)]="obj.Currency" type="text" name="Currency" placeholder="Currency" class="form-control" data-val="true" data-val-required="The Currency field is required." autocomplete="off" />
                  </div>
                </div>
                

                <div class="col-lg-12">
                  <div class="form-group">
                    <label>Jobdetails <span class="field-validation-valid" data-valmsg-for="Jobdetails" data-valmsg-replace="true"></span>
                    </label>
                    <input [(ngModel)]="obj.Jobdetails" type="text" name="Jobdetails" placeholder="Jobdetails" class="form-control" data-val="true" data-val-required="The Jobdetails field is required." autocomplete="off" />
                  </div>
                </div>
                

                <div class="col-lg-12">
                  <div class="form-group">
                    <label>Settings <span class="field-validation-valid" data-valmsg-for="Settings" data-valmsg-replace="true"></span>
                    </label>
                    <input [(ngModel)]="obj.Settings" type="text" name="Settings" placeholder="Settings" class="form-control" data-val="true" data-val-required="The Settings field is required." autocomplete="off" />
                  </div>
                </div>
                

                <div class="col-lg-12">
                  <div class="form-group">
                    <label>Users <span class="field-validation-valid" data-valmsg-for="Users" data-valmsg-replace="true"></span>
                    </label>
                    <input [(ngModel)]="obj.Users" type="text" name="Users" placeholder="Users" class="form-control" data-val="true" data-val-required="The Users field is required." autocomplete="off" />
                  </div>
                </div> -->
                

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
export class EditComponent {
  @ViewChild('neoEditForm', { read: ElementRef }) formElement!: ElementRef;
  @ViewChild('modal', { static: false }) modal!: ElementRef;
  @Output() shouldRefresh = new EventEmitter<boolean>();
  @Input() obj: Company = emptyCompany();


  api = inject(CompanyService);
  companyList: DdlItem[] = [];

  private getModal(): HTMLElement {
    return this.modal.nativeElement;
  }

  loadForm(obj: Company): void {
    removeValidationErrors(this.formElement);
    hideShowModal(this.getModal(), 'show');
    this.obj = obj;
  }

  onSubmit(form: NgForm): void {
    var isValid = validateForm(this.formElement)
    if (isValid) {
      this.api.edit(this.obj).subscribe((resp) => {
        alert(resp.message);
        hideShowModal(this.getModal(), 'hide');
        this.shouldRefresh.emit(true);
      });
    }
  }
}