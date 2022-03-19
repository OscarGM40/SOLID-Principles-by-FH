import { FacebookNotification } from "./providers/facebook-notification";
import { INotification } from "./providers/notification.interface";
import { SlackAdapterNotification } from "./providers/slack-adapter-notification";
import { SlackNotification } from "./providers/slack-notification";
import { NotificationService } from "./services/notification.service";


const providers: INotification[] = [
  new FacebookNotification(),
  new SlackAdapterNotification(new SlackNotification())
];

const notificationService = new NotificationService(providers);
notificationService.post("Nuevo curso", "25% de descuento en el nuevo curso durante una semana");