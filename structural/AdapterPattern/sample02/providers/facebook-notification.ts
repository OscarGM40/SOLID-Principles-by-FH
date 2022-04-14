import { INotification } from "./notification.interface";

export class FacebookNotification implements INotification {
  public post(title: string, message: string) {
    console.log(`Notification posted on Facebook: ${title} - ${message}`);
  }
}

