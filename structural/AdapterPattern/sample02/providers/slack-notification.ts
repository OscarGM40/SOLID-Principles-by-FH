
export class SlackNotification {
  public send(channelId: string, title: string, message: string) {
    console.log(`Notification sent to Slack: ${channelId} - ${title} - ${message}`);
  }
}

