import { Solution } from './../../models/interfaces/solution';
import { MonacoEditorComponent } from './../monaco-editor/monaco-editor.component';
import { TaskModel } from './../../models/task';
import { Task } from './../../models/interfaces/task';
import { Component, OnInit } from '@angular/core';
import { SolutionService } from 'src/app/services/solution.service';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  public selectedTask:number = -1;
  public goodNickname:boolean = true;
  public goodTask:boolean = true;

  constructor(private solutionService:SolutionService) { }

  ngOnInit(): void {
  }
  public getTasks():Task[]{
    return TaskModel.tasks;
  }
  private get taskAmount():number{
    return TaskModel.tasks.length;
  }
  public submit(nickname:HTMLInputElement, editor:MonacoEditorComponent):void{
    let error:boolean = false;
    if(!this.checkNickname(nickname.value)){
      window.scroll(0,0);
      error = true;
    }
    if(!this.checkTask(this.selectedTask)){
      if(!error){
        window.scroll(0,0);
        error = true;
      }
    }
    if(!editor.checkCode){
      if(!error){
        window.scroll(0,0);
        error = true;
      }
    }
    if(error) return;
    let solution:Solution = {
      Author:nickname.value,
      TaskId:this.selectedTask+1,
      LanguageId:editor.getSelectedLanguage+1,
      Solution:editor.getCode
    };

    this.solutionService.addSolution(solution).subscribe(respone => {
      console.log(respone);
    });
  }
  private checkNickname(nickname:string):boolean{
    if(nickname === ""){
      this.goodNickname = false;
      return false;
    }
    this.goodNickname = true;
    return true;
  }
  private checkTask(task:number):boolean{
    if(task >= 0 && task < this.taskAmount){
      this.goodTask = true;
      return true;
    }
    this.goodTask = false;
    return false;
  }
}
