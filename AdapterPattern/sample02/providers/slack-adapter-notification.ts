import { INotification } from "./notification.interface";
import { SlackNotification } from "./slack-notification";


export class SlackAdapterNotification implements INotification {

  constructor(private slackNotification: SlackNotification) { }

  public post(title: string, message: string) {
    this.slackNotification.send("#general", title, message);
  }

}