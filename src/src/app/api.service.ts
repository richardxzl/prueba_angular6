import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  API_URL = 'https://quadminds-notes-test.getsandbox.com';

  constructor(private httpClient: HttpClient) {}

  getNotas(){
    return this.httpClient.get(`${this.API_URL}/notes`);
  }
  getNotaById(notes){
    return this.httpClient.get(`${this.API_URL}/notes/${notes}`);
  }
  createNotas(notes){
    return this.httpClient.post(`${this.API_URL}/notes`,notes);
  }
  updateNotas(notes){
    return this.httpClient.put(`${this.API_URL}/notes/${notes.id}`,notes);
  }
  deleteNotas(notes){
    return this.httpClient.delete(`${this.API_URL}/notes/${notes}`);
  }
}