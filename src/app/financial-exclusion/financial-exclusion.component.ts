import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AgGridAngular } from "ag-grid-angular";
import type { ColDef, GridApi } from "ag-grid-community";
import { AllCommunityModule, ModuleRegistry, themeAlpine } from "ag-grid-community";
import { HttpService } from '../services/http.services';

ModuleRegistry.registerModules([AllCommunityModule]);
@Component({
  selector: 'app-financial-exclusion',
  imports: [AgGridAngular, FormsModule, CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './financial-exclusion.component.html',
  styleUrl: './financial-exclusion.component.css'
})
export class FinancialExclusionComponent {

  theme = themeAlpine;
  rowData: any[] = [];
  financialExclusionGridApi!: GridApi;
  columnDefs: ColDef[] = [
    { field: "accountID", headerName: "Account ID", filter: "agTextColumnFilter" },
    { field: "accountHolderName", headerName: "Account Holder Name", filter: "agTextColumnFilter" },
    { field: "accountBalance", headerName: "Account Balance", filter: "agNumberColumnFilter" },
    { field: "accountOpeningDate", headerName: "Account Opening Date", filter: "agDateColumnFilter" },
    { field: "transactionDate", headerName: "Transaction Date", filter: "agDateColumnFilter" },
    { field: "transactionType", headerName: "Transaction Type", filter: "agTextColumnFilter" },
    { field: "gender", headerName: "Gender", filter: "agTextColumnFilter" },
    { field: "age", headerName: "Age", filter: "agNumberColumnFilter" },
    { field: "customerOccupation", headerName: "Occupation", filter: "agTextColumnFilter" },
    { field: "merchantType", headerName: "Merchant Type", filter: "agTextColumnFilter" },
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

  resetGridSettings() {
    this.financialExclusionGridApi?.setFilterModel(null);
    this.financialExclusionGridApi?.resetColumnState();
    this.financialExclusionGridApi?.resetColumnGroupState();
  }

  onGridReady(params: any) {
    this.financialExclusionGridApi = params.api;
    params.api.sizeColumnsToFit();
  }

  constructor(private htttpService: HttpService) {
    console.log("Inside ngOnINIT")
    this.htttpService.getAllExcludedAccounts().subscribe((data: any) => {
      this.rowData = data;
      setTimeout(() => {
        this.financialExclusionGridApi?.setGridOption('rowData', this.rowData)
      }, 100);
    });
  }

  ngOnint() {
    console.log("Inside ngOnINIT")
    this.htttpService.getAllExcludedAccounts().subscribe((data: any) => {
      this.rowData = data;
      setTimeout(() => {
        this.financialExclusionGridApi?.setGridOption('rowData', this.rowData)
      }, 100);
    });
  }

  getRowData() {
    return [
      {
        accountId: "1234567890",
        transactionDate: "2023-10-01",
        previousTransactionDate: "2023-09-25",
        accountHolderName: "John Doe",
        gender: "Male",
        dateOfBirth: "1990-01-01",
        occupation: "Software Engineer",
        merchantType: "Retail",
        occupationScheme: "Full-time"
      },
      {
        accountId: "1234567891",
        transactionDate: "2023-10-01",
        previousTransactionDate: "2023-09-25",
        accountHolderName: "Joane Dixin",
        gender: "Female",
        dateOfBirth: "1990-01-01",
        occupation: "Software Engineer",
        merchantType: "Retail",
        occupationScheme: "Full-time"
      },
    ];
  }
}
