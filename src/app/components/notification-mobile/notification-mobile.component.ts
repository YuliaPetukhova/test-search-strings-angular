import { Component } from '@angular/core';
import {NotificationIconComponent} from "../notification-icon/notification-icon.component";

@Component({
  selector: 'app-notification-mobile',
  standalone: true,
    imports: [
        NotificationIconComponent
    ],
  templateUrl: './notification-mobile.component.html',
  styleUrl: './notification-mobile.component.css'
})
export class NotificationMobileComponent {

}
