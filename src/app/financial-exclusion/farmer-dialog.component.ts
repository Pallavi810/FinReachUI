// src/app/software-engineer-dialog/software-engineer-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'; // If using mat-button in dialog

@Component({
  selector: 'app-farmer-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title>The Kisan Credit Card (KCC) Scheme</h2>
    <mat-dialog-content>
      <p>The Kisan Credit Card (KCC) Scheme is an agricultural credit scheme introduced by the Government of India in 1998 to provide the suitable and real-time access to money for their farming requirements and other agricultural expenses.</p>
      <h3>Benefits</h3>
      <ul>
        <li>Offers short-term credit for agricultural and allied activities.</li>
        <li>Boosts the farmers to purchase inputs like seeds, fertilizers, and machinery.</li>
        <li>Covers expenses related to crop cultivation, post-harvest handling, and marketing.</li>
        <li>Reduces the dependence on informal credit sources and moneylenders.</li>
        <li>Improves the financial inclusion by extending credit to farmers who will not have traditional banking access.</li>
        <li>Improvement of the farm productivity, crops yield, and gross income.</li>
        </ul>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `
})
export class FarmerDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<FarmerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
