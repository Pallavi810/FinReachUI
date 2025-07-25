import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    headers = new HttpHeaders();
    // env = 'https://hack-team-finreach.as.r.appspot.com';
    env ='/api';
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
    getCountExcludedAccountsByLocation() {
        return this.getData(`${this.env}/countExcludedAccountsByLocation`);
    }
    getCountExcludedAccountsByAge(minAge: any, maxAge: any) {
        const httpParams = new HttpParams().append("minAge", minAge).append("maxAge", maxAge);
        return this.getData(`${this.env}/countExcludedAccountsByAge`, httpParams);
    }
    getCountExcludedAccountsByOccupation() {
        return this.getData(`${this.env}/countExcludedAccountsByOccupation`);
    }
    getCountExcludedLocationGender() {
        return this.getData(`${this.env}/countExclusionLocationGender`);
    }
    getCountExcludedForEachMonthCurrYear() {
        return this.getData(`${this.env}/countExcludedByMonthAndYear`);
    }
    getAllDormantAccounts() {
        return this.getData(`${this.env}/getAllDormantAccounts`);
    }
    getCountDormantAccountsByLocation() {
        return this.getData(`${this.env}/countDormantAccountsByLocation`);
    }
    getCountDormantAccountsByAge(minAge: any, maxAge: any) {
        const httpParams = new HttpParams().append("minAge", minAge).append("maxAge", maxAge);
        return this.getData(`${this.env}/countDormantAccountsByAge`, httpParams);
    }
    getCountDormantAccountsByOccupation() {
        return this.getData(`${this.env}/countDormantAccountsByOccupation`);
    }
    getCountDormantLocationGender() {
        return this.getData(`${this.env}/countDormantLocationGender`);
    }
    getCountDormantForEachMonthCurrYear() {
        return this.getData(`${this.env}/countDormantByMonthAndYear`);
    }
}