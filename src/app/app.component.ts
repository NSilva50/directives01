import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  buttonText: string = 'Display Details';
  paragraphText: string = 'Favorite Food: ';

  buttonStart: string = 'Display Details';
  paragraphStart: string = 'Favorite Food: ';

  buttonAlternative: string = 'Hide Details';
  paragraphAlternative: string = 'Pizza and Panfried Chow-mein';

  start() {
    this.buttonText = this.buttonStart;
    this.paragraphText = this.paragraphStart;
  }

  toggle() {
    if(this.buttonText === this.buttonStart){
      this.buttonText = this.buttonAlternative;
      this.paragraphText = this.paragraphAlternative;
    } else{
      this.buttonText = this.buttonStart;
      this.paragraphText = this.paragraphStart;
    }
    console.log();
  }
}
