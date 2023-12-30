import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-best-of',
  templateUrl: './best-of.component.html',
  styleUrls: ['./best-of.component.css']
})
export class BestOfComponent implements OnInit{
  custonDropdown = new FormControl();
  filterControl = new FormControl();
  filteredOptions: Observable<Array<OptionItem>>;
  optionItems: Array<OptionItem>;

  dishList: string[] = [
    'Dishes',
  ];

  ngOnInit() {
    this.optionItems = this.dishList.map((item) => {
      return {
        name: item,
        show: true,
      };
    });
    this.filteredOptions = this.filterControl.valueChanges.pipe(
      startWith(''),
      map((value: string) => {
        this.optionItems.forEach((option) => {
          option.show = option.name
            .toLocaleLowerCase()
            .includes(value.toLowerCase());
        });
        return this.optionItems;
      })
    );
  }

  onPanelClose() {
    this.filterControl.setValue('');
  }
}
export interface OptionItem {
  name: string;
  show: boolean;

}
