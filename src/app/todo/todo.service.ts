import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {

  constructor(private _http: Http) { }
  greeting(): string {
    return 'Hello World';
  }
  getUsers(): any {
    return this._http.get('https://jsonplaceholder.typicode.com/posts')
      .map((res: Response) => res.json());
  }

}
