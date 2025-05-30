import { Component, ElementRef, EventEmitter, ViewChild, Input, inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Observable, of, finalize, BehaviorSubject } from 'rxjs';
import { Product, emptyProduct } from '../page-entities/product.entity';
import { DdlItem } from '../page-entities/ddl-item.entity';
import { ProductService } from './product.service';
import { jQ, hideShowModal, validateForm, removeValidationErrors } from './../../shared/jquery-utils';

import {
  ChangeDetectorRef,
  ViewEncapsulation,
  AfterViewInit,
} from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {
  CKEDITOR_EDITOR,
  CKEDITOR_CONFIG,
} from './../../shared/ckeditor.config';

@Component({
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    styles: `
    @import 'ckeditor5/ckeditor5.css';
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    `,
    imports: [CommonModule, FormsModule, CKEditorModule],
    selector: 'add-modal',
    template: `
        <div #modal class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="display: none;">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header box-header well">
                    <h2 class="modal-title" id="model-title-h2"><i class="fa fa-plus"></i> Product New Setting</h2>
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
                    <label>ProductId <span class="field-validation-valid" data-valmsg-for="ProductId" data-valmsg-replace="true"></span>
                    </label>
                    <input [(ngModel)]="obj.ProductId" type="text" name="ProductId" placeholder="ProductId" class="form-control" data-val="true" data-val-required="The ProductId field is required." autocomplete="off" />
                  </div>
                </div>
                

                <div class="col-lg-12">
                  <div class="form-group">
                    <label>Pname <span class="field-validation-valid" data-valmsg-for="Pname" data-valmsg-replace="true"></span>
                    </label>
                    <input [(ngModel)]="obj.Pname" type="text" name="Pname" placeholder="Pname" class="form-control" data-val="true" data-val-required="The Pname field is required." autocomplete="off" />
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
                    <label>WebPageId <span class="field-validation-valid" data-valmsg-for="WebPageId" data-valmsg-replace="true"></span>
                    </label>
                    <input [(ngModel)]="obj.WebPageId" type="text" name="WebPageId" placeholder="WebPageId" class="form-control" data-val="true" data-val-required="The WebPageId field is required." autocomplete="off" />
                  </div>
                </div>
                

                <div class="col-lg-12">
                  <div class="form-group">
                    <label>UserTypeId <span class="field-validation-valid" data-valmsg-for="UserTypeId" data-valmsg-replace="true"></span>
                    </label>
                    <input [(ngModel)]="obj.UserTypeId" type="text" name="UserTypeId" placeholder="UserTypeId" class="form-control" data-val="true" data-val-required="The UserTypeId field is required." autocomplete="off" />
                  </div>
                </div>
                

                <div class="col-lg-12">
                  <div class="form-group">
                    <label>IsActive <span class="field-validation-valid" data-valmsg-for="IsActive" data-valmsg-replace="true"></span>
                    </label>
                    <input [(ngModel)]="obj.IsActive" type="text" name="IsActive" placeholder="IsActive" class="form-control" data-val="true" data-val-required="The IsActive field is required." autocomplete="off" />
                  </div>
                </div>
                

                <div class="col-lg-12">
                  <div class="form-group">
                    <label>UserType <span class="field-validation-valid" data-valmsg-for="UserType" data-valmsg-replace="true"></span>
                    </label>
                    <input [(ngModel)]="obj.UserType" type="text" name="UserType" placeholder="UserType" class="form-control" data-val="true" data-val-required="The UserType field is required." autocomplete="off" />
                  </div>
                </div>
                

                <div class="col-lg-12">
                  <div class="form-group">
                    <label>WebPage <span class="field-validation-valid" data-valmsg-for="WebPage" data-valmsg-replace="true"></span>
                    </label>
                    <input [(ngModel)]="obj.WebPage" type="text" name="WebPage" placeholder="WebPage" class="form-control" data-val="true" data-val-required="The WebPage field is required." autocomplete="off" />
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="form-group">
                  <ckeditor
                            [editor]="Editor"
                            [config]="config"
                            *ngIf="isLayoutReady"
                            [(ngModel)]="editorData"
                            [ngModelOptions]="{standalone: true}"
                          />
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
export class AddComponent implements AfterViewInit {
    @ViewChild('neoAddForm', { read: ElementRef }) formElement!: ElementRef;
    @ViewChild('modal', { static: false }) modal!: ElementRef;
    @Output() shouldRefresh = new EventEmitter<boolean>();
    @Input() obj: Product = emptyProduct();

    api = inject(ProductService);
    companyList: DdlItem[] = [];

    private changeDetector = inject(ChangeDetectorRef);
    public isLayoutReady = false;
    public Editor = CKEDITOR_EDITOR;
    public config = {} as typeof CKEDITOR_CONFIG;
    public editorData = '<p>Start typing…</p>';
  
    ngAfterViewInit() {
      this.config = CKEDITOR_CONFIG;
      this.isLayoutReady = true;
      this.changeDetector.detectChanges();
    }


    private getModal(): HTMLElement {
        return this.modal.nativeElement;
    }

    loadForm(): void {
        removeValidationErrors(this.formElement);
        this.obj = emptyProduct();
        hideShowModal(this.getModal(), 'show');
    }

    onSubmit(form: NgForm): void {
      console.log('editorData',this.editorData)
        var isValid = validateForm(this.formElement)
        if (isValid) {
            this.api.add(this.obj).subscribe((resp) => {
                alert(resp.message);
                hideShowModal(this.getModal(), 'hide');
                this.shouldRefresh.emit(true);
            });
        }
    }
}