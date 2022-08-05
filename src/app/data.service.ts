import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {first, Subject} from "rxjs";
import {IUser} from "./IUser";

@Injectable({
  providedIn: 'root'
})
export class DataService {


  currentUser$ = new Subject<IUser | null>();

  //todo is string ok for post and msg?
  user!: IUser;
  post!: string;
  message!: string;

  currentUser!: IUser

  constructor(private httpService: HttpService) {
  }

  onLogin(username: string, password: string) {
    this.httpService.login(username, password).pipe(first()).subscribe({
      next: (data) => {
        this.user = data
        this.currentUser = this.user;
        this.currentUser$.next(this.user);
        console.log(this.user);
        console.log(this.currentUser);
      },
      error: (error) => {
        console.error(error)
      }
    })
  }

  onLogout() {
    this.currentUser$.next(null);
  }

  onRegister(username: string, password: string) {
    this.httpService.create(username, password).pipe(first()).subscribe({
      next: (data) => {
        this.user = data
      },
      error: (error) => {
        console.error(error)
      }
    })
  }
//todo add author
  onPost(username: string, password: string, title: string, body: string) {
    username = this.currentUser.username;
    password = this.currentUser.password;
    console.log(username);
    console.log(password);
    this.httpService.post(username, password, title, body).pipe(first()).subscribe({
      next: (data) => {
        this.post = data
      },
      error: (error) => {
        console.error(error)
      }
    })
  }

//todo is first/pipe ok?
  displayMessages(username: string, password: string) {
    //TODO CURRENT TEST
    username = this.currentUser.username;
    password = this.currentUser.password;
    console.log(username);
    console.log(password);
    return this.httpService.getMessages(username, password).pipe(first()).subscribe({
      next: (data) => {
        this.message = data;
      },
      error: (error) => {
        console.error(error)
      }
    });
  }
}
