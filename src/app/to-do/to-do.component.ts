import { Component, OnInit } from '@angular/core';
import { ToDo } from '../Model/ToDo';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  items:ToDo[];
  inputItem:string="";
  constructor() { }

  ngOnInit(): void {
    
    this.items=[
      {
        Content:"MyTest",
        Completed:false
      },
      {
        Content:"MyTest1",
        Completed:false
      }
    ]
  }
  AddToDo()
  {
    this.items.push({

      Content :this.inputItem,
      Completed : false
    });
  }

  RemoveItem(id:number)
  {
   this.items= this.items.filter((v,i)=>i != id);
  }

  completedItem(id:number)
  {
    this.items.map((v,i) =>
    {
      if(id ==i)
      v.Completed = !v.Completed
    });
  }
  

    
  

}
