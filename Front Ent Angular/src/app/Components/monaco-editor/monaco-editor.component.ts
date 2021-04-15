import { EditorLanguageModel } from './../../models/editor-language';
import { EditorLanguage } from '../../models/interfaces/editor-language';
import { Component, OnInit } from '@angular/core';
import { EditorSettings } from 'src/app/models/editor-settings';
@Component({
  selector: 'app-monaco-editor',
  templateUrl: './monaco-editor.component.html',
  styleUrls: ['./monaco-editor.component.css']
})
export class MonacoEditorComponent implements OnInit {

  private editorSettings:EditorSettings = new EditorSettings;
  private selectedLanguage:number = 0;
  private code:string = "";
  public goodEditorCode = true;

  constructor() { }
  ngOnInit(): void {}

  public get getSelectedLanguage():number{
    return this.selectedLanguage;
  }
  public get getSettings():EditorSettings{
    return this.editorSettings;
  }
  public get getCode():string{
    return this.code;
  }
  public getLanguages():EditorLanguage[]{
    return EditorLanguageModel.languages;
  }
  get selectedLanguageModel() {
    return this.selectedLanguage;
  }
  set selectedLanguageModel(value) {
    this.selectedLanguage = value;
    this.changeSelectedLanguage(value);
  }

  public changeSelectedLanguage(value:number):void{
    this.editorSettings.setCodeModel(
      EditorLanguageModel.findLanguage(value),
      EditorLanguageModel.findDefaultValue(value)
      );
  }
  public onEditorCodeChanged(code:string):void {
    this.code = code;
  }
  public get checkCode():boolean{
    if(this.code === ""){
      this.goodEditorCode = false;
      return false;
    }
    this.goodEditorCode = true;
    return true;
  }
}
