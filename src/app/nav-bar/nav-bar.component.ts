import {Component, OnInit} from '@angular/core';
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {MatInput, MatInputModule} from "@angular/material/input";
import {map, Observable, startWith} from "rxjs";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from "@angular/material/autocomplete";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatIcon} from "@angular/material/icon";
import {MatSelect} from "@angular/material/select";

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
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
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

  constructor() {
    this.filteredOptions = new Observable<string[]>();
  }

  ngOnInit() {
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  toggleSearch() {
    console.log('toggleSearch');
    this.showSearch = !this.showSearch;
    this.showSearchIcon = !this.showSearchIcon;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
