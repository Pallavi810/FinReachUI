import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { GridApi, ColDef, GridReadyEvent, ModuleRegistry, themeAlpine } from 'ag-grid-community';
import { ActionButtonRendererComponent } from './button-render-component'
import { HttpService } from '../services/http.services';


@Component({
  selector: 'app-dormant-account',
  imports: [AgGridAngular, CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './dormant-account.component.html',
  styleUrl: './dormant-account.component.css'
})
export class DormantAccountComponent {
  private gridApi!: GridApi;
  theme = themeAlpine;
  dataLoading: boolean = true;

  columnDefs: ColDef[] = [
    { field: "accountID", headerName: "Account ID", filter: "agTextColumnFilter" },
    { field: "accountOpeningDate", headerName: "Account Opening Date", filter: "agDateColumnFilter" },
    { field: "accountHolderName", headerName: "Account Holder Name", filter: "agTextColumnFilter" },
    { field: "gender", headerName: "Gender", filter: "agTextColumnFilter" },
    { field: "customerOccupation", headerName: "Occupation", filter: "agTextColumnFilter" },
    { field: "age", headerName: "Age", filter: "agNumberColumnFilter" },
    { field: "transactionDate", headerName: "Last Transaction Date", filter: "agDateColumnFilter" },
    { field: "accountBalance", headerName: "Account Balance", filter: "agNumberColumnFilter" },
    {
      headerName: 'Action', cellRenderer: ActionButtonRendererComponent,
    },
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

  constructor(private htttpService: HttpService) { }
  ngOnInit() {
    this.getGridData();
  }
  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  resetGridSettings() {
    this.gridApi?.setFilterModel(null);
    this.gridApi?.resetColumnState();
    this.gridApi?.resetColumnGroupState();
  }

  getGridData() {
    this.htttpService.getAllDormantAccounts().subscribe((data: any) => {
      this.rowData = data;
      setTimeout(() => {
        this.gridApi?.setGridOption('rowData', this.rowData)
        this.dataLoading = false;
        this.gridApi?.setGridOption("loading", this.dataLoading);
      }, 100);
    });
  }

}
