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
   

    searchRepos(ange) {
        this.searchRepo = '';

    }

    constructor(public gitRepoRequest: RequestService ) { }

  ngOnInit() {
     
   

}
}
