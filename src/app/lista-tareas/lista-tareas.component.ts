import { Component } from '@angular/core';
import { tasksclass } from "../../app/interfaces"
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.scss'
})
export class ListaTareasComponent {
  //array de tareas
  tasks:tasksclass[]=[
    {
      task: "Aprender JavaScript",
      isDone: false,
      priority: 1 // Alta prioridad
    },
    {
      task: "Leer documentación de Angular",
      isDone: false,
      priority: 2 // Prioridad media
    },
    {
      task: "Desarrollar una pequeña aplicación",
      isDone: false,
      priority: 1 // Alta prioridad
    },
    {
      task: "Revisar código anterior",
      isDone: true,
      priority: 3 // Baja prioridad
    },
    {
      task: "Participar en una reunión de equipo",
      isDone: false,
      priority: 1 // Alta prioridad
    }
  ];
  //ordenar por prioridad
  prioritySort(){
    this.tasks.sort((a,b)=> a.priority - b.priority);
  }
  //eliminar la ultima tarea
  deleteLast(){
    this.tasks.pop();
  }
  //añadir una nueva tarea
  newTaskName: any;
  newTaskPriority: number=1;

  addNewTask(){
    this.tasks.push({
      task: this.newTaskName,
      isDone: false,
      priority: this.newTaskPriority
    });
    //limpiar campos después de añadir la nueva tarea
  }
  //eliminar la tarea segun el indice que queramos
  deleteOne(tarea:any){
    const index = this.tasks.indexOf(tarea);
    this.tasks.splice(index, 1);
  }
}
