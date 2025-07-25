import { Component, inject, ViewChild, ElementRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-redeem-voucher',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './redeem-voucher.component.html',
  styleUrl: './redeem-voucher.component.css'
})
export class RedeemVoucherComponent {
private _snackBar = inject(MatSnackBar);

  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('accountInput') accountInput!: ElementRef;
  @ViewChild('idInput') idInput!: ElementRef;

  openSnackBar() {
    this._snackBar.open("Voucher Redeemed Successfully", "Undo", {
      duration: 3000
    });

    this.nameInput.nativeElement.value = '';
    this.accountInput.nativeElement.value = '';
    this.idInput.nativeElement.value = '';
  }
}
