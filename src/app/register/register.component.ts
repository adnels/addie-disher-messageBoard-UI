import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {HttpService} from "../http.service";
import {first} from "rxjs";
import {DataService} from "../data.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [NgbModalConfig, NgbModal]
})

export class RegisterComponent implements OnInit {

  username!: string;
  password!: string;
  //todo is any type here bad?
  user: any;

  constructor(private dataService: DataService, private httpService: HttpService, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }

  onClick() {
    this.dataService.onRegister(this.username, this.password);
  }

  open(content: any) {
    this.modalService.open(content);
  }
}
