// src/app/occupation-scheme-cell-renderer/occupation-scheme-cell-renderer.component.ts
import { Component,inject } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DetailDialogComponent } from '../dormant-account/activate-dialog-component';
import { FarmerDialogComponent } from './farmer-dialog.component';
import { LabourDialogComponent } from './labour-dialog.component';
import { RetiredDialogComponent } from './retired-dialog.component';

@Component({
  selector: 'app-occupation-scheme-cell-renderer', // If using Angular 15+, mark as standalone
  imports: [CommonModule], // Add CommonModule here if standalone
  template:`
      <ng-container [ngSwitch]="params.data?.customerOccupation">
  <button mat-button color="primary" *ngSwitchCase="'Farmer'" (click)="openDialog('A')" style="border-radius: 5px;background-color: darkslateblue;color: white;">
    KCC
  </button>
  <button mat-button color="primary" *ngSwitchCase="'Labour'" (click)="openDialog('B')" style="border-radius: 5px;background-color: darkslateblue;color: white;">
    PMGKAY
  </button>
  <button mat-button color="accent" *ngSwitchDefault (click)="openDialog('C')" style="border-radius: 5px;background-color: darkslateblue;color: white;">
    SCSS
  </button>
</ng-container>
`,
})
export class OccupationSchemeCellRendererComponent implements ICellRendererAngularComp {
  params!: ICellRendererParams;
  private dialog = inject(MatDialog);

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  refresh(params: ICellRendererParams): boolean {
    this.params = params;
    return true;
  }

  openDialog(nameType: string): void {
      const occupation = this.params.data.customerOccupation;
    let dialogComponentToOpen: any;
    switch (occupation) {
      case 'Farmer':
        dialogComponentToOpen = FarmerDialogComponent;
        break;
      case 'Labour':
        dialogComponentToOpen = LabourDialogComponent;
        break;
      default:
        dialogComponentToOpen = RetiredDialogComponent; // For any other occupation
        break;
    }
    if (dialogComponentToOpen) {
      this.dialog.open(dialogComponentToOpen, {
        width: '600px',
        data: this.params.data, // Always pass the full row data
      });
    }

    }
}
