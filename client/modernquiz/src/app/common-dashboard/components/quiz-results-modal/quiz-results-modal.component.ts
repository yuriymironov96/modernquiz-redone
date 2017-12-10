import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-quiz-results-modal',
  templateUrl: './quiz-results-modal.component.html',
  styleUrls: ['./quiz-results-modal.component.css']
})
export class QuizResultsModalComponent {

  constructor(
    public dialogRef: MatDialogRef<QuizResultsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
