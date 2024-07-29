import { Component } from '@angular/core';
import {AddIconComponent} from "./add-icon/add-icon.component";
import {MenuListComponent} from "./menu-list/menu-list.component";
import {NotificationMobileComponent} from "./notification-mobile/notification-mobile.component";
import {SearchComponent} from "./search/search.component";

@Component({
  selector: 'app-menu',
  standalone: true,
    imports: [
        AddIconComponent,
        MenuListComponent,
        NotificationMobileComponent,
        SearchComponent
    ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
