import { Component } from '@angular/core';
import {MatBadge} from "@angular/material/badge";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-notification-icon',
  standalone: true,
    imports: [
        MatBadge,
        MatIcon
    ],
  templateUrl: './notification-icon.component.html',
  styleUrl: './notification-icon.component.css'
})
export class NotificationIconComponent {

}
