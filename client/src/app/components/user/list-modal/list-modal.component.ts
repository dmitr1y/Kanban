import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { IUser } from 'src/app/components/auth/interfaces';

@Component({
  selector: 'app-list-modal',
  templateUrl: './list-modal.component.html',
  styleUrls: ['./list-modal.component.css'],
})
export class ListModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ListModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IUser[]) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
