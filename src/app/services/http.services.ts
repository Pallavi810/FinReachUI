import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    headers = new HttpHeaders();
    env = 'https://concrete-flight-466607-e5.el.r.appspot.com';
    constructor(private httpClient: HttpClient) {
    }

    getData(source: string, httpParams?: HttpParams) {
        return this.httpClient.get(source, { headers: this.headers, params: httpParams }).pipe(
            tap((res: any) => res),
            catchError(this.handleError)
        );
    }

    postData(source: string, data: any, httpParams?: HttpParams) {
        return this.httpClient.post(source, data, { headers: this.headers, params: httpParams }).pipe(
            tap((res: any) => res),
            catchError(this.handleError)
        );
    }

    private handleError(error: any) {
        return throwError(error.error || "Server error");
    }

    getAllExcludedAccounts() {
        return this.getData(`${this.env}/getAllExcludedAccounts`);
    }
}