import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable, Input } from '@angular/core';
import { map, Observable, retry, throwError } from 'rxjs';
import { catchError } from 'rxjs';
import { AppError } from '../public/app-error';
import { NotFoundError } from '../public/not-found-errors';
import { BadInputError } from '../public/bad-input';
import { lastValueFrom } from 'rxjs';


export class DataService {

  constructor(private url: string, private http: HttpClient) { }

  getAll(){
    return this.http.get(this.url)
      .pipe(
        map(response => response),
        catchError(this.HandleError)
      )
  }

  add(resource){
    return this.http.post(this.url, JSON.stringify(resource))
    .pipe(
      map(response => response),
      catchError(this.HandleError)
    )
  }

  update(resource){
   return this.http.patch(`${this.url}/${resource.id}`, JSON.stringify({isRead : true}))
    .pipe(
      map(response => response),
      catchError(this.HandleError)
    )
  }

  izbrisi(id){
  return lastValueFrom(this.http.delete(this.url+'/'+id)
      .pipe(
        map(response => response),
        retry(5),
        catchError(this.HandleError)
      ))
    }
    
    private HandleError(error: Response) {
      if(error.status===400)
        return throwError(() => new BadInputError(error)); //EXPECTED ERROR
      if(error.status===404)
        return throwError(()=>new NotFoundError()); //EXPECTED ERROR
      return throwError(()=>new AppError(error)); //UNEXPECTED ERROR
    }
}
