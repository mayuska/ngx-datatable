import { Component } from '@angular/core';
import { ColumnMode } from 'projects/swimlane/ngx-datatable/src/public-api';
import { FullEmployee } from '../data.model';

@Component({
  selector: 'column-pinning-demo',
  template: `
    <div>
      <h3>
        Column Pinning
        <small>
          <a
            href="https://github.com/swimlane/ngx-datatable/blob/master/src/app/columns/pinning.component.ts"
            target="_blank"
          >
            Source
          </a>
        </small>
      </h3>
      <ngx-datatable
        class="material"
        [columnMode]="ColumnMode.force"
        [headerHeight]="50"
        [footerHeight]="50"
        [rowHeight]="50"
        [scrollbarV]="true"
        [scrollbarH]="true"
        [rows]="rows"
      >
        <ngx-datatable-column name="Name" [width]="300" [frozenLeft]="true"> </ngx-datatable-column>
        <ngx-datatable-column name="Gender"> </ngx-datatable-column>
        <ngx-datatable-column name="Age"> </ngx-datatable-column>
        <ngx-datatable-column name="City" [width]="150" prop="address.city"> </ngx-datatable-column>
        <ngx-datatable-column name="State" [width]="300" prop="address.state" [frozenRight]="true">
        </ngx-datatable-column>
      </ngx-datatable>
    </div>
  `,
  standalone: false
})
export class ColumnPinningComponent {
  rows: FullEmployee[] = [];

  ColumnMode = ColumnMode;

  constructor() {
    this.fetch(data => {
      this.rows = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/100k.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }
}
