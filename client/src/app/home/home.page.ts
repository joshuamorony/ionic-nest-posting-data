import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private messages: MessagesService){

  }

  ngOnInit(){

    let testMessage = {
      content: 'Hello!',
      submittedBy: 'Josh'
    };

    this.messages.createMessage(testMessage).subscribe((res) => {
      console.log(res);
    });

  }

}