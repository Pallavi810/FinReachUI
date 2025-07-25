import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialog } from '@angular/material/dialog';
import { SendOtpDialogComponent } from './send-otp-dialog-component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-detail-dialog',
  standalone: true,
  imports: [MatDialogModule,MatButtonModule],
  templateUrl: './activate-dialog-component.html'

})
export class DetailDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  private dialog = inject(MatDialog);

  openOtpDialog(){
       this.dialog.open(SendOtpDialogComponent, {
      width: '300px'
    });
  }
}
