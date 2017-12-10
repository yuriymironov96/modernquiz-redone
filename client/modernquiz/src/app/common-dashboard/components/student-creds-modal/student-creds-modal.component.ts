import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-student-creds-modal',
  templateUrl: './student-creds-modal.component.html',
  styleUrls: ['./student-creds-modal.component.css']
})
export class StudentCredsModalComponent {

  constructor(
    public dialogRef: MatDialogRef<StudentCredsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}


  onNoClick(): void {
    this.dialogRef.close();
  }

}
