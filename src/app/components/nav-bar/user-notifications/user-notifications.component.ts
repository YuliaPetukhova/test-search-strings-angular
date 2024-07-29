import { Component } from '@angular/core';
import {NotificationIconComponent} from "./notification-icon/notification-icon.component";

@Component({
  selector: 'app-user-notifications',
  standalone: true,
    imports: [
        NotificationIconComponent
    ],
  templateUrl: './user-notifications.component.html',
  styleUrl: './user-notifications.component.css'
})
export class UserNotificationsComponent {

}
