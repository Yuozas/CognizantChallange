import { CodeModel } from "@ngstack/code-editor";
import { EditorLanguageModel } from "./editor-language";

export class EditorSettings{
  public readonly theme:string = "vs-dark";
  public codeModel:CodeModel = {
    language: EditorLanguageModel.languages[0].language,
    value: EditorLanguageModel.languages[0].defaultValue,
    uri: ""
  };
  public readonly options:object = {
    contextmenu: true,
    minimap: {
      enabled: true
    }
  };
  public setCodeModel(language:string = "", value:string = "", uri:string = ""):void{
    this.codeModel = {language, value, uri};
  }
  constructor(){}
}
