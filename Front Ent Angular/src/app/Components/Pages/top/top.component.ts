import { SolutionService } from './../../../services/solution.service';
import { Component, OnInit } from '@angular/core';
import { SolutionView } from 'src/app/models/solution-view';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  public top:TopComponent = this;
  public solutions:SolutionView[] = [];
  public canRender:boolean = false;
  constructor(private solutionService:SolutionService) { }

  ngOnInit(): void {
    this.solutionService.getSolutions(3).subscribe(solutions => {
      this.solutions = solutions;
      this.canRender = true;
    });
  }

  public getSolution(index:number):SolutionView{
    return this.solutions[index];
  }
}
