import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoryBookComponent } from './story-book/story-book.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StoryBookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
