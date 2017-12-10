import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-repassing-notification-modal',
  templateUrl: './repassing-notification-modal.component.html',
  styleUrls: ['./repassing-notification-modal.component.css']
})
export class RepassingNotificationModalComponent {

  constructor(
    public dialogRef: MatDialogRef<RepassingNotificationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}


  onNoClick(): void {
    this.dialogRef.close();
  }

}
