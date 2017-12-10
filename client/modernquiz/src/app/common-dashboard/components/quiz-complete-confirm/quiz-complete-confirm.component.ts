import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-quiz-complete-confirm',
  templateUrl: './quiz-complete-confirm.component.html',
  styleUrls: ['./quiz-complete-confirm.component.css']
})
export class QuizCompleteConfirmComponent {

  constructor(
    public dialogRef: MatDialogRef<QuizCompleteConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
