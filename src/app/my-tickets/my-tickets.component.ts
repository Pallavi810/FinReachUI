import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  GridApi,ColDef, GridReadyEvent,ModuleRegistry,themeAlpine} from 'ag-grid-community';

@Component({
  selector: 'app-my-tickets',
  imports: [AgGridAngular, CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './my-tickets.component.html',
  styleUrl: './my-tickets.component.css'
})
export class MyTicketsComponent {
 private gridApi!: GridApi;
   theme = themeAlpine;

   columnDefs: ColDef[] = [
    { field: "ticketId", headerName: "Ticket No", filter: "agTextColumnFilter" },
    { field: "subject", headerName: "Subject", filter: "agTextColumnFilter" },
    { field: "status", headerName: "Status", filter: "agTextColumnFilter" }
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
        "ticketId": "1133123",
        "subject":  "Activate My account",
        "status": "Pending"
      },
     {
      "ticketId": "1133162",
      "subject":  "Reset Password",
      "status": "Done"
    },
   {
    "ticketId": "1133163",
    "subject":  "Create My account",
    "status": "Done"
  },
   {
    "ticketId": "1132163",
    "subject":  "How to redeem Voucher",
    "status": "Done"
  },
   {
    "ticketId": "1633163",
    "subject":  "Facing Issue while redeem voucher",
    "status": "Done"
  },
   {
    "ticketId": "7133163",
    "subject":  "Re-activate My account",
    "status": "Done"
  },
   {
    "ticketId": "1134163",
    "subject":  "Create My account",
    "status": "Done"
  },
   {
    "ticketId": "1133193",
    "subject":  "Create My account",
    "status": "Done"
  },
   {
    "ticketId": "2133163",
    "subject":  "Create My account",
    "status": "Done"
  },
   {
    "ticketId": "6133163",
    "subject":  "Create My account",
    "status": "Done"
  },
    ]
  }
}
