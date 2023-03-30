import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'maersk-ui-chellenge';
  array: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  shuffle() {
    let currentIndex = this.array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [this.array[currentIndex], this.array[randomIndex]] = [
        this.array[randomIndex],
        this.array[currentIndex],
      ];
    }
  }
  sort() {
    this.array = this.array.sort();
  }
}
