import { Component } from '@angular/core';
import {
  ColumnMode,
  SelectionType,
  TableColumn
} from 'projects/swimlane/ngx-datatable/src/public-api';
import { Employee } from '../data.model';

@Component({
  selector: 'multi-selection-demo',
  template: `
    <div>
      <h3>
        Multi Select
        <small>
          <a
            href="https://github.com/swimlane/ngx-datatable/blob/master/src/app/selection/selection-multi.component.ts"
            target="_blank"
          >
            Source
          </a>
        </small>
      </h3>
      <div style="float:left;width:75%">
        <div class="info">
          <p
            >This demonstrates multi selection table, use CTRL or SHIFT click to select multiple
            items.</p
          >
        </div>

        <ngx-datatable
          class="material"
          [rows]="rows"
          [columnMode]="ColumnMode.force"
          [columns]="columns"
          [headerHeight]="50"
          [footerHeight]="50"
          rowHeight="auto"
          [limit]="5"
          [selected]="selected"
          [selectionType]="SelectionType.multi"
          (activate)="onActivate($event)"
          (select)="onSelect($event)"
        >
        </ngx-datatable>
      </div>

      <div class="selected-column">
        <h4>Selections</h4>
        <ul>
          @for (sel of selected; track sel) {
          <li>
            {{ sel.name }}
          </li>
          } @if (!selected.length) {
          <li>No Selections</li>
          }
        </ul>
      </div>
    </div>
  `,
  standalone: false
})
export class MultiSelectionComponent {
  rows: Employee[] = [];

  selected: Employee[] = [];

  columns: TableColumn[] = [{ prop: 'name' }, { name: 'Company' }, { name: 'Gender' }];

  ColumnMode = ColumnMode;
  SelectionType = SelectionType;

  constructor() {
    this.fetch(data => {
      this.rows = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }
}
