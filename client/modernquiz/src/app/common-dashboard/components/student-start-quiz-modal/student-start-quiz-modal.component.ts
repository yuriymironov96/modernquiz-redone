import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-student-start-quiz-modal',
  templateUrl: './student-start-quiz-modal.component.html',
  styleUrls: ['./student-start-quiz-modal.component.css']
})
export class StudentStartQuizModalComponent {

  constructor(
    public dialogRef: MatDialogRef<StudentStartQuizModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
