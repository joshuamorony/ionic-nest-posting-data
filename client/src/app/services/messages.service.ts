import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) { 

  }

  createMessage(message): Observable<Object> {

    return this.http.post('http://localhost:3000/messages', {
      content: message.content,
      submittedBy: message.submittedBy
    });

  }

  getMessages(): Observable<Object> {
    return this.http.get('http://localhost:3000/messages');
  }

  getMessage(id: string): Observable<Object> {
    return this.http.get(`http://localhost:3000/messages/${id}`);
  }

}
