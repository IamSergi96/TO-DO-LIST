import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListaTareasComponent, CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'APP_ANGULAR';
}
