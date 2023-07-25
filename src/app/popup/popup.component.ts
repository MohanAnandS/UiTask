import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent {
  isOffCanvasHidden: boolean = false;
  isAccordionHidden = true;

  progress: number = 0;
  interval: any;

  startMigration() {
    this.interval = setInterval(() => {
      this.progress += 10;
      if (this.progress >= 100) {
        clearInterval(this.interval);
        this.completeMigration();
      }
    }, 1000);
  }

  completeMigration() {
    alert('Migration process Completed!');
    this.isOffCanvasHidden = true;
  }

  toggleOffCanvas() {
    this.isOffCanvasHidden = !this.isOffCanvasHidden;
  }
}
