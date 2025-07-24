import { Component, inject } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DetailDialogComponent } from './activate-dialog-component';

@Component({
  selector: 'app-action-button-renderer',
  standalone: true,
  imports: [MatButtonModule],
  template: `
 <button mat-button color="primary" (click)="openDialog()">
      Activate
    </button>
  `
})
export class ActionButtonRendererComponent implements ICellRendererAngularComp {
  params: any;

  agInit(params: any): void {
    this.params = params;
  }

    private dialog = inject(MatDialog);

  refresh(): boolean {
    return false;
  }

 openDialog() {
    this.dialog.open(DetailDialogComponent, {
      width: '600px',
      data: this.params.data,
    });
  }

}
