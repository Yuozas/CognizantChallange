import { SolutionView } from './../../models/solution-view';
import { NumberExtension } from './../../models/number-extensions';
import { EditorLanguageModel } from './../../models/editor-language';
import { Solution } from 'src/app/models/interfaces/solution';
import { Component, Input, OnInit } from '@angular/core';
import { CodeModel } from '@ngstack/code-editor';
import { TaskModel } from 'src/app/models/task';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {
  @Input() solution:SolutionView | undefined;
  @Input() index:number | undefined;
  public theme:string = "vs-dark";
  public codeModel:CodeModel = {language:"", value:"", uri:"0"};
  public options:object = {
    contextmenu: true,
    minimap: {
      enabled: true
    }
  };

  constructor() { }

  ngOnInit(): void {
    this.codeModel.language = this.getLanguage;
    this.codeModel.value = this.solution!.Solution + "";
    this.codeModel.uri = this.getName + NumberExtension.randomInt();
  }
  public get getTask():string{
    return this.solution!.Task + "";
  }
  public get getLanguage():string{
    return this.solution!.Language;
  }
  public get getName():string{
    return this.solution!.Author;
  }
  public get getIndex():string{
    return this.index + ".";
  }
  public get getTotal():string{
    return this.solution!.Total + "";
  }
}
