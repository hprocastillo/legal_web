import {Injectable} from '@angular/core';
import {addDoc, collection, Firestore} from "@angular/fire/firestore";
import {Message} from "../interfaces/message";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private firestore: Firestore) {
  }

  addMessage(message: Message) {
    const messageRef = collection(this.firestore, 'messages');
    return addDoc(messageRef, message);
  }

}
