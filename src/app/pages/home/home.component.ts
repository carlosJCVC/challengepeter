import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Top 5 GitHub Users';
  menu_title = 'Home';
  content = 'Tap the username to see more information.';
  topFive​ = ['GrahamCampbell', 'fabpot', 'weierophinney', 'rkh', 'josh']​;

  constructor() { }

  ngOnInit() {
  }

}
