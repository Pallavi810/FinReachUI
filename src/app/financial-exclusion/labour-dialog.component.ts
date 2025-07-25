// src/app/software-engineer-dialog/software-engineer-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'; // If using mat-button in dialog

@Component({
  selector: 'app-labour-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title>Pradhan Mantri Garib Kalyan Anna Yojana (PMGKAY)</h2>
    <mat-dialog-content>
      <p>The government's commitment to food security is strengthened by the Pradhan Mantri Garib Kalyan Anna Yojana (PMGKAY), which has been extended for the next five years starting from 1st January 2024. This scheme provides free food grains and direct cash transfers to families below the poverty line, including migrant workers</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `
})
export class LabourDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<LabourDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
