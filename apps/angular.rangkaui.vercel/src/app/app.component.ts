import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RangkauiAngularModule } from 'rangkaui-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RangkauiAngularModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular.rangkaui.vercel';
}
