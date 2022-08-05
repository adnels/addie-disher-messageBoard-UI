import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [NgbModalConfig, NgbModal]
})

export class LoginComponent implements OnInit {

  username!: string;
  password!: string;

  constructor(private dataService: DataService, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {}

  onClick() {
    this.dataService.onLogin(this.username, this.password);
  }

  open(content: any) {
    this.modalService.open(content);
  }
}
