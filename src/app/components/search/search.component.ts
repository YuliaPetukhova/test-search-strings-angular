import {Component, OnInit, ViewChild} from '@angular/core';
import {FocusDirective} from "../../directives/focus.directive";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from "@angular/material/autocomplete";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {NgClass, NgForOf} from "@angular/common";
import {map, Observable, startWith} from "rxjs";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FocusDirective,
    FormsModule,
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatCheckbox,
    MatFormField,
    MatIcon,
    MatInput,
    MatLabel,
    MatOption,
    MatSuffix,
    NgForOf,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
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
