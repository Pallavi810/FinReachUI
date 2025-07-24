import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  GridApi,ColDef, GridReadyEvent,ModuleRegistry,themeAlpine} from 'ag-grid-community';

@Component({
  selector: 'app-dormant-account',
 imports: [AgGridAngular, CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './dormant-account.component.html',
  styleUrl: './dormant-account.component.css'
})
export class DormantAccountComponent {
  private gridApi!: GridApi;
   theme = themeAlpine;

   columnDefs: ColDef[] = [
    { field: "accountId", headerName: "Account ID", filter: "agTextColumnFilter" },
    { field: "accountOpeningDate", headerName: "Account Opening Date", filter: "agDateColumnFilter" },
    { field: "accountHolderName", headerName: "Account Holder Name", filter: "agTextColumnFilter" },
    { field: "gender", headerName: "Gender", filter: "agSetColumnFilter" },
    { field: "dateOfBirth", headerName: "Date of Birth", filter: "agDateColumnFilter" },
    { field: "occupation", headerName: "Occupation", filter: "agSetColumnFilter" },
    { field: "numberOfTransaction", headerName: "Number Of Transaction", filter: "agSetColumnFilter" },
    { field: "lastTransactionDate", headerName: "Last Transaction Date", filter: "agDateColumnFilter" },
    { field: "occupationScheme", headerName: "Occupation Scheme", filter: "agSetColumnFilter" },
  ];



  defaultColDef: ColDef = {
    editable: true,
    flex: 1,
    minWidth: 100,
    filter: true,
  };

  autoGroupColumnDef: ColDef = {
    headerName: "Group",
    minWidth: 200,
    field: "make",
    cellRendererParams: {
      suppressCount: true,
    },
  };

  rowData: any = [];

  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.rowData = this.getGridData();
  }
  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

   resetGridSettings() {

    }
  getGridData() {
    return [
       {
        "accountId": "1133123",
        "aaccountOpeningDatege":  "24/08/2010",
        "accountHolderName": "Rohit",
        "gender": "Male",
        "dateOfBirth": "24/08/2008",
        "numberOfTransaction": "10",
        "lastTransactionDate": "24/08/2019",
        "occupationScheme": "farmer",
      },
         {
        "accountId": "1133123",
        "aaccountOpeningDatege":  "24/08/2010",
        "accountHolderName": "Rohit",
        "gender": "Male",
        "dateOfBirth": "24/08/2008",
        "numberOfTransaction": "10",
        "lastTransactionDate": "24/08/2019",
        "occupationScheme": "farmer",
      },
         {
        "accountId": "1133123",
        "aaccountOpeningDatege":  "24/08/2010",
        "accountHolderName": "Rohit",
        "gender": "Male",
        "dateOfBirth": "24/08/2008",
        "numberOfTransaction": "10",
        "lastTransactionDate": "24/08/2019",
        "occupationScheme": "farmer",
      },
         {
        "accountId": "1133123",
        "aaccountOpeningDatege":  "24/08/2010",
        "accountHolderName": "Rohit",
        "gender": "Male",
        "dateOfBirth": "24/08/2008",
        "numberOfTransaction": "10",
        "lastTransactionDate": "24/08/2019",
        "occupationScheme": "farmer",
      },
         {
        "accountId": "1133123",
        "aaccountOpeningDatege":  "24/08/2010",
        "accountHolderName": "Rohit",
        "gender": "Male",
        "dateOfBirth": "24/08/2008",
        "numberOfTransaction": "10",
        "lastTransactionDate": "24/08/2019",
        "occupationScheme": "farmer",
      },
         {
        "accountId": "1133123",
        "aaccountOpeningDatege":  "24/08/2010",
        "accountHolderName": "Rohit",
        "gender": "Male",
        "dateOfBirth": "24/08/2008",
        "numberOfTransaction": "10",
        "lastTransactionDate": "24/08/2019",
        "occupationScheme": "farmer",
      }
    ]
  }
}