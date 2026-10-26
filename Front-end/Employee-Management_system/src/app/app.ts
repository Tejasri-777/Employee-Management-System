import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLinkActive, RouterOutlet,RouterLink } from '@angular/router';

@Component({
  imports: [RouterOutlet,RouterLink,RouterLinkActive,FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Employee Management System');
}
