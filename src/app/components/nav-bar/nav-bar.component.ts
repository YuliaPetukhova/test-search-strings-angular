import {Component, OnInit, ViewChild} from '@angular/core';
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {MatInput, MatInputModule} from "@angular/material/input";
import {map, Observable, startWith} from "rxjs";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from "@angular/material/autocomplete";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatIcon} from "@angular/material/icon";
import {MatSelect} from "@angular/material/select";
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenu, MatMenuTrigger} from "@angular/material/menu";
import {FocusDirective} from "../../directives/focus.directive";
import {LogoComponent} from "../logo/logo.component";
import {NotificationIconComponent} from "../notification-icon/notification-icon.component";
import {UserNotificationsComponent} from "../user-notifications/user-notifications.component";
import {AddIconComponent} from "../add-icon/add-icon.component";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    MatFormField,
    MatAutocompleteTrigger,
    ReactiveFormsModule,
    MatAutocomplete,
    MatIcon,
    MatCheckbox,
    MatOption,
    FormsModule,
    NgForOf,
    NgIf,
    MatFormFieldModule,
    MatInput,
    MatInputModule,
    NgClass,
    MatSelect,
    MatBadgeModule,
    MatMenu,
    MatMenuTrigger,
    FocusDirective,
    LogoComponent,
    NotificationIconComponent,
    UserNotificationsComponent,
    AddIconComponent,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  @ViewChild(MatAutocompleteTrigger) autocomplete!: MatAutocompleteTrigger;

  options: string[] = ['One', 'Two', 'Three'];
  searchControl = new FormControl();

  filters = [
    {name: 'Я участник', checked: false},
    {name: 'Строгий поиск', checked: false},
    {name: 'В заголовках', checked: false},
  ];

  filtersOnly = [
    {name: 'теги', checked: false},
    {name: 'просьбы', checked: false},
    {name: 'контакты', checked: false},
  ];

  wordsSearch = [
    {wordName: 'приложение'},
    {wordName: 'кнопка'},
    {wordName: 'кнопка-приложение'},
    {wordName: 'приложение'},
    {wordName: 'кнопка'},
    {wordName: 'кнопка-приложение'},
  ];

  filteredOptions!: Observable<string[]>;

  showSearch: boolean = false;
  showSearchIcon: boolean = true;

  constructor() {
    this.filteredOptions = new Observable<string[]>();
  }

  ngOnInit(): void {
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  toggleSearch(): void {
    this.showSearch = !this.showSearch;
    this.showSearchIcon = !this.showSearchIcon;
  }

  closeSearch(): void {
    this.showSearch = false;
    this.autocomplete.closePanel();
  }

  private _filter(value: string): string[] {
    const filterValue: string = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
