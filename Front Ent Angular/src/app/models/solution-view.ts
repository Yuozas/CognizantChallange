export class SolutionView{

  public Author:string;
  public Task:string;
  public Language:string;
  public Solution:string;
  public Total:number;

  constructor(Author:string, Task:string, Language:string, Solution:string, Total:number){
    this.Author = Author;
    this.Task = Task;
    this.Language = Language;
    this.Solution = Solution;
    this.Total = Total;
  }

}
