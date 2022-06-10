import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  getAuthors() {
    return ['Franz Liszt', 'Ludwig van Beethoven', 'Vatroslav lisinski']
  }
  constructor() { }
}
