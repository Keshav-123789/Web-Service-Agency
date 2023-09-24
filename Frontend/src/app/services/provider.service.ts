import { HttpClient } from '@angular/common/http';
import { EnvironmentInjector, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ProviderClass } from '../models/providers.class';
import { DeleteProvidersComponent } from '../providers/delete-providers/delete-providers.component';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  //URL Endpoint to our Express app
  apiUrl = `${environment.apiUrl}/providers/`;
  constructor(private http: HttpClient) { }

  //GET all records
  getProviders(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // GET one record
  getProvider(id: number): Observable<any> {
    return this.http.get(this.apiUrl + id);
    // return this.http.get("http://localhost:3000/providers/edit/" + id);
  }
  //PUT - update a record
  updateProvider(id: number, newProvider: ProviderClass): Observable<ProviderClass> {
    return this.http.put<ProviderClass>(this.apiUrl + id, newProvider);
  }

  //POST - add a new record
  addProvider(newProvider: ProviderClass): Observable<any> {
    return this.http.post(this.apiUrl, newProvider);
  }
  //DELETE - a single record
  deleteProvider(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + id);
  }

}
