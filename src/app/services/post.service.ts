import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Input } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class PostService extends DataService {

  constructor(http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/posts', http);
   }

}