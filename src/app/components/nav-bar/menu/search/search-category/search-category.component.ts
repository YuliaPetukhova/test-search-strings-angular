import {Component, OnInit} from '@angular/core';
import {MatCheckbox} from "@angular/material/checkbox";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {NgForOf} from "@angular/common";
import {FormControl, FormsModule} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";

@Component({
  selector: 'app-search-category',
  standalone: true,
  imports: [
    MatCheckbox,
    MatFormField,
    MatIcon,
    MatInput,
    MatLabel,
    MatSuffix,
    NgForOf,
    FormsModule
  ],
  templateUrl: './search-category.component.html',
  styleUrl: './search-category.component.css'
})
export class SearchCategoryComponent implements OnInit {
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

  constructor() {
    this.filteredOptions = new Observable<string[]>();
  }

  ngOnInit(): void {
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue: string = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
