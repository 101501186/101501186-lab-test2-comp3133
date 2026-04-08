import { HttpClientModule } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Characterlist } from './components/characterlist/characterlist';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule, Characterlist],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('101501186-lab-test2-comp3133');
}
