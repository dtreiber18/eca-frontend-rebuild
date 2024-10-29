import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000/items'; // URL for JSON Server

  constructor(private http: HttpClient) { }

  // Fetch items
  getItems(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Create a new item
  createItem(item: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, item);
  }

  // Update an existing item
  updateItem(item: any): Observable<any> {
    const url = `${this.apiUrl}/${item.id}`; // URL with item ID for PUT request
    return this.http.put<any>(url, item);
  }
}
