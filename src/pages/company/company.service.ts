import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, finalize, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Company } from '../page-entities/company.entity';
import { withNoGlobalLoaderGif } from './../../shared/auth.interceptor';
import { PageCommonService } from './../page-common.service';
import { ListingResponse } from './../page-entities/listing-response.entity';

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends PageCommonService {
  private baseUrl: string;
  private emptyListingResponse: ListingResponse<Company> = { pageSize: 0, totalPageCount: 0, totalItemCount: 0, currentPageNo: 0, data: [] };

  constructor(override http: HttpClient) {
    super(http);
    this.baseUrl = `${this.apiBaseUrl}/company`
  }

  list(pageNo: number = 0): Observable<ListingResponse<Company>> {
    this.showLoader();
    return this.http.get<{ isSuccess: boolean, data: ListingResponse<Company> }>(`${this.baseUrl}?pageNo=${pageNo}`, { context: withNoGlobalLoaderGif() }).pipe(
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

  search(q: string): Observable<ListingResponse<Company>> {
    this.showLoader();
    return this.http.get<{ isSuccess: boolean, data: ListingResponse<Company> }>(`${this.baseUrl}/search?q=${q}`, { context: withNoGlobalLoaderGif() }).pipe(
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

  add(obj: Company): Observable<{ isSuccess: boolean, message: string }> {
    this.showLoader();
    return this.http.post<{ isSuccess: boolean, message: string }>(this.baseUrl, obj)
      .pipe(finalize(() => this.hideLoader()));
  }

  get(id: number): Observable<Company> {
    this.showLoader();
    return this.http.get<Company>(`${this.baseUrl}/${id}`)
      .pipe(finalize(() => this.hideLoader()));
  }

  edit(obj: Company): Observable<{ isSuccess: boolean, message: string }> {
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