import { Component } from '@angular/core';
import { ColumnMode, TableColumn } from 'projects/swimlane/ngx-datatable/src/public-api';
import { Employee } from '../data.model';

@Component({
  selector: 'basic-bootstrap-theme-demo',
  template: `
    <div>
      <h3>
        Bootstrap Theme
        <small>
          <a
            href="https://github.com/swimlane/ngx-datatable/blob/master/src/app/basic/bootstrap.component.ts"
            target="_blank"
          >
            Source
          </a>
        </small>
      </h3>
      <ngx-datatable
        class="bootstrap"
        [rows]="rows"
        [loadingIndicator]="loadingIndicator"
        [columns]="columns"
        [columnMode]="ColumnMode.force"
        [headerHeight]="40"
        [summaryRow]="true"
        [summaryPosition]="'bottom'"
        [footerHeight]="40"
        [limit]="10"
        rowHeight="auto"
        [reorderable]="reorderable"
      >
      </ngx-datatable>
    </div>
  `,
  standalone: false
})
export class BootstrapThemeComponent {
  rows: Employee[] = [];
  loadingIndicator = true;
  reorderable = true;

  columns: TableColumn[] = [
    { prop: 'name', summaryFunc: () => null },
    { name: 'Gender', summaryFunc: cells => this.summaryForGender(cells) },
    { name: 'Company', summaryFunc: () => null }
  ];

  ColumnMode = ColumnMode;

  constructor() {
    this.fetch(data => {
      this.rows = data;
      setTimeout(() => {
        this.loadingIndicator = false;
      }, 1500);
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

  private summaryForGender(cells: string[]) {
    const males = cells.filter(cell => cell === 'male').length;
    const females = cells.filter(cell => cell === 'female').length;

    return `males: ${males}, females: ${females}`;
  }
}
