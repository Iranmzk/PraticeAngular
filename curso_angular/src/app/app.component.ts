import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName = 'Post Malone';

  userData={
    email: 'Post@gmail.com',
    role: 'admin'
  }

  title = 'curso_angular';
}
