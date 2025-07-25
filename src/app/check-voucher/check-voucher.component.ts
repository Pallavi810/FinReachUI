import { Component, inject, ViewChild, ElementRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-check-voucher',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './check-voucher.component.html',
  styleUrls: ['./check-voucher.component.css']
})
export class CheckVoucherComponent {
  private _snackBar = inject(MatSnackBar);

  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('accountInput') accountInput!: ElementRef;
  @ViewChild('idInput') idInput!: ElementRef;

  openSnackBar() {
    this._snackBar.open("Voucher Generated Successfully", 'Close', {
        duration: 3000,
        panelClass: ['snackbar-error']
    });

    this.nameInput.nativeElement.value = '';
    this.accountInput.nativeElement.value = '';
    this.idInput.nativeElement.value = '';
  }
}
