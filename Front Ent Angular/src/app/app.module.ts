import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/MainComponents/header/header.component';
import { FooterComponent } from './Components/MainComponents/footer/footer.component';
import { MainComponent } from './Components/Pages/main/main.component';
import { SolveComponent } from './Components/Pages/solve/solve.component';
import { TopComponent } from './Components/Pages/top/top.component';
import { TaskFormComponent } from './Components/task-form/task-form.component';
import { MonacoEditorComponent } from './Components/monaco-editor/monaco-editor.component';
import { CodeEditorModule } from '@ngstack/code-editor';
import { SolutionComponent } from './Components/solution/solution.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SolveComponent,
    TopComponent,
    TaskFormComponent,
    MonacoEditorComponent,
    SolutionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CodeEditorModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
