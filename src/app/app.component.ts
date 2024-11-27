import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularTestStructureComponent } from './components/angular-test-structure/angular-test-structure.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularTestStructureComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-programmer-test-new';
}
