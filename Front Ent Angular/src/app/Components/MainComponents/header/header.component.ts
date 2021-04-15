import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  main:boolean = false;
  solve:boolean = false;
  top:boolean = false;

  constructor(route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
