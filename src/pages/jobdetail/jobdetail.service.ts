import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, finalize, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Jobdetail } from '../page-entities/jobdetail.entity';
import { withNoGlobalLoaderGif } from './../../shared/auth.interceptor';
import { PageCommonService } from './../page-common.service';
import { ListingResponse } from './../page-entities/listing-response.entity';

@Injectable({
  providedIn: 'root'
})
export class JobdetailService extends PageCommonService {
  private baseUrl: string;
  private emptyListingResponse: ListingResponse<Jobdetail> = { pageSize: 0, totalPageCount: 0, totalItemCount: 0, currentPageNo: 0, data: [] };

  constructor(override http: HttpClient) {
    super(http);
    this.baseUrl = `${this.apiBaseUrl}/jobdetail`
  }

  list(pageNo: number = 0, pageSize: number = 0, cityId: number = 0): Observable<ListingResponse<Jobdetail>> {
    this.showLoader();
    return this.http.get<{ isSuccess: boolean, data: ListingResponse<Jobdetail> }>(`${this.baseUrl}?pageNo=${pageNo}&pageSize=${pageSize}&cityId=${cityId}`, { context: withNoGlobalLoaderGif() }).pipe(
      map((response) => {
        if (response.isSuccess) {
          return response.data;
        } else {
          return this.emptyListingResponse;
        }
      }),
      catchError(() => {
        return of(this.emptyListingResponse);
      }))
      .pipe(finalize(() => this.hideLoader()));
  }

  search(q: string): Observable<ListingResponse<Jobdetail>> {
    this.showLoader();
    return this.http.get<{ isSuccess: boolean, data: ListingResponse<Jobdetail> }>(`${this.baseUrl}/search?q=${q}`, { context: withNoGlobalLoaderGif() }).pipe(
      map((response) => {
        if (response.isSuccess) {
          return response.data;
        } else {
          return this.emptyListingResponse;
        }
      }),
      catchError(() => {
        return of(this.emptyListingResponse);
      }))
      .pipe(finalize(() => this.hideLoader()));
  }

  add(obj: Jobdetail): Observable<{ isSuccess: boolean, message: string }> {
    this.showLoader();
    return this.http.post<{ isSuccess: boolean, message: string }>(this.baseUrl, obj)
      .pipe(finalize(() => this.hideLoader()));
  }

  get(id: number): Observable<Jobdetail> {
    this.showLoader();
    return this.http.get<Jobdetail>(`${this.baseUrl}/${id}`)
      .pipe(finalize(() => this.hideLoader()));
  }

  edit(obj: Jobdetail): Observable<{ isSuccess: boolean, message: string }> {
    this.showLoader();
    return this.http.put<{ isSuccess: boolean, message: string }>(this.baseUrl, obj)
      .pipe(finalize(() => this.hideLoader()));
  }

  delete(id: number): Observable<{ isSuccess: boolean, message: string }> {
    this.showLoader();
    return this.http.delete<{ isSuccess: boolean, message: string }>(`${this.baseUrl}/${id}`)
      .pipe(finalize(() => this.hideLoader()));
  }
}