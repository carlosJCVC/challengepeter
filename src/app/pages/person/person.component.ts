import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import {ActivatedRoute} from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  username: string;
  githubUser: User;

  constructor(private httpService:HttpService, private router: ActivatedRoute ) {
  }

  ngOnInit() {
    this.username = this.router.params.value.username;
    console.log(this.username);
    this.httpService.getInfo(this.username).subscribe(response => {
      this.githubUser = new User(
        response.avatar_url,
        response.name,
        response.location
      );
    });
  }

}
