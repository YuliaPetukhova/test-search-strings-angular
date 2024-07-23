import {Component, OnInit, signal} from '@angular/core';
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
import {MatButtonModule} from '@angular/material/button';
import {MatToolbar} from "@angular/material/toolbar";
import {AsyncPipe, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {MatInput, MatInputModule} from "@angular/material/input";
import {map, Observable, startWith} from "rxjs";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger,
  MatOption
} from "@angular/material/autocomplete";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatSelect} from "@angular/material/select";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    MatLabel,
    MatFormField,
    MatMenuModule,
    MatMenuTrigger,
    MatButtonModule,
    MatToolbar,
    NgOptimizedImage,
    MatInput,
    MatAutocomplete,
    MatOption,
    FormsModule,
    MatAutocompleteTrigger,
    MatCheckbox,
    NgForOf,
    AsyncPipe,
    ReactiveFormsModule,
    MatSelect,
    MatIcon,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    NgIf,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  options: string[] = ['One', 'Two', 'Three'];
  searchControl = new FormControl();

  filters = [
    {name: 'я участник', checked: false},
    {name: 'строгий поиск', checked: false},
    {name: 'в заголовках', checked: false},
  ];

  filtersOnly = [
    {name: 'теги', checked: false},
    {name: 'просьбы', checked: false},
    {name: 'контакты', checked: false},
  ];

  filteredOptions!: Observable<string[]>;

  showSearch = false;
  showSearchIcon = true;

  toggleSearch() {
    this.showSearch = !this.showSearch;
    this.showSearchIcon = !this.showSearchIcon;
  }

  constructor() {
    this.filteredOptions = new Observable<string[]>();
  }

  readonly panelOpenState = signal(false);

  ngOnInit() {
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
