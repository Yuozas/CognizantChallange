import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SolutionView } from '../models/solution-view';
import { Solution } from '../models/interfaces/solution';
const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SolutionService {
  readonly url:string = 'http://localhost:28573/api/Solution';
  constructor(private http:HttpClient) { }

  getSolutions(limit:number = 0):Observable<SolutionView[]>{
    return this.http.get<SolutionView[]>(this.url + "?limit="+ limit);
  }
  addSolution(solution:any):Observable<Solution>{
    return this.http.post<Solution>(this.url, solution)
  }
}
