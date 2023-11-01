import {Timestamp} from "@firebase/firestore";

export interface Message {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  message: string;

  createdAt: Timestamp;
}
