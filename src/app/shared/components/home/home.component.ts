import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Message} from "../../interfaces/message";
import {MessagesService} from "../../services/messages.service";
import {Timestamp} from "firebase/firestore";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  messageForm: FormGroup;

  constructor(private fb: FormBuilder, private messagesService: MessagesService) {
    this.messageForm = fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }

  async onSubmit() {
    if (this.messageForm.valid) {
      let message: Message;
      message = this.messageForm.value;
      message.createdAt = Timestamp.fromDate(new Date());
      await this.messagesService.addMessage(message);
      this.messageForm.reset();
    }
  }
}
