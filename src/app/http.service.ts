import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string) {
    return this.httpClient.post(
      "http://localhost:8080/account/login",
      {username, password}
    ) as Observable<any>
  }

  create(username: string, password: string) {
    return this.httpClient.post(
      "http://localhost:8080/account/create",
      {username, password}
    ) as Observable<any>
  }

  post(username: string, password: string, title: string, body: string) {
    return this.httpClient.post(
      "http://localhost:8080/post/create",
      {username, password, title, body}
    ) as Observable<any>
  }

  getMessages(username: string, password: string) {
    return this.httpClient.post(
      "http://localhost:8080/message/get",
      {username, password}
    ) as Observable<any>
  }
}
