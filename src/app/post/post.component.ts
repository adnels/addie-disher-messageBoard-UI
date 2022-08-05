import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {DataService} from "../data.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [NgbModalConfig, NgbModal]
})

export class PostComponent implements OnInit {

  username!: string;
  password!: string;
  title!: string;
  body!: string;

  constructor(private dataService: DataService, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }

  //add to post html
  onClick() {
    this.dataService.onPost(this.username, this.password, this.title, this.body);
  }
  open(content:any) {
    this.modalService.open(content);
  }
}
