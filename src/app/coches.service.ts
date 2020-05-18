import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CochesService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000';
  }

  getCoches(): Promise<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/coches`).toPromise();
  }

}



