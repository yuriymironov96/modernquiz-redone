import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-start-quiz-modal',
  templateUrl: './start-quiz-modal.component.html',
  styleUrls: ['./start-quiz-modal.component.css']
})
export class StartQuizModalComponent {

  questionCount = 1;

  constructor(
    public dialogRef: MatDialogRef<StartQuizModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
