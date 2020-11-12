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



    constructor() { }

  ngOnInit() {
     
     }
}
