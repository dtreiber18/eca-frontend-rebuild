import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  // Mock data method
  getItems() {
    return [
      { id: 1, name: 'Item 1', description: 'This is the first item' },
      { id: 2, name: 'Item 2', description: 'This is the second item' },
      { id: 3, name: 'Item 3', description: 'This is the third item' }
    ];
  }
}
