import {Component, OnInit, Optional} from '@angular/core';
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {DataService} from "../data.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class MessageComponent implements OnInit {

  username!: string;
  password!: string;
 // personalMessages!: Iterable<any>

  constructor(private dataService: DataService, config: NgbModalConfig, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

//todo it's returning this data but how do I actually take and display it
  onClick() {
    //this.personalMessages =
      console.log(this.dataService.displayMessages(this.username, this.password));
    //console.log(this.personalMessages);
  }

  open(content:any) {
    this.modalService.open(content);
  }
}
