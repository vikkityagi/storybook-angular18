import { Component } from '@angular/core';

@Component({
  selector: 'app-story-book',
  standalone: true,
  imports: [],
  templateUrl: './story-book.component.html',
  styleUrl: './story-book.component.css'
})
export class StoryBookComponent {

  mytext: string = "Intial";

  showText(input: any){
    this.mytext = input.value;

  }

}
