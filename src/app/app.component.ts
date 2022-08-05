import {Component, OnDestroy} from '@angular/core';
import {DataService} from "./data.service";
import {IUser} from "./IUser";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  title = 'message-board-ui';
  currentUser: IUser | null = null;
  subscription: Subscription

  constructor(private dataService: DataService) {
    this.subscription = this.dataService.currentUser$.subscribe(nextValue => this.currentUser = nextValue)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
