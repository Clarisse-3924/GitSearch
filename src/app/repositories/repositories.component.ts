import { Component, OnInit } from '@angular/core';

import {RequestService} from '../request.service';
import {Repository} from '../repository';


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
    providers: [RequestService],
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

    repository: Repository;
    public searchRepo: string;
  users: import("/home/clarisse/Documents/Git/src/app/user").User;
   
    public searchMe = '';
    public githubUser: string;

    findUser(username) {
      this.githubUser = '';
      this.searchMe  = username;
      this.ngOnInit();
  }
  constructor(public githubUserRequest: RequestService, public userRepos:RequestService) { }

ngOnInit() {
    this.githubUserRequest.githubUser(this.searchMe);
    this.users = this.githubUserRequest.users;
    this.userRepos.gitUserRepos(this.searchMe);
    console.log(this.userRepos);
}
}