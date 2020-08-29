import { Component, OnInit, ViewChild, Query } from '@angular/core';
import { createElement } from '@syncfusion/ej2-base';
import {
  TabComponent,
  SelectEventArgs,
} from '@syncfusion/ej2-angular-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
import { element } from 'protractor';

enableRipple(true);

@Component({
  selector: 'app-syncfusion-tabs',
  templateUrl: './syncfusion-tabs.component.html',
  styleUrls: ['./syncfusion-tabs.component.css'],
})
export class SyncfusionTabsComponent implements OnInit {
  @ViewChild('element') tabInstance: TabComponent;

  constructor() {}

  ngOnInit(): void {
    this.datas.forEach((data) => {
      console.log(data.tabName);
      data.queries.forEach((query) => {
        console.log(query.queryNo, query.query);
      });
    });
  }
  // defined the array of data
  public datas = [
    {
      tabName: 'Metadata',
      queries: [
        {
          queryNo: 'AQ1',
          query: 'please check metadata',
        },
        {
          queryNo: 'AQ2',
          query: 'please check metadata',
        },
      ],
    },
    {
      tabName: 'Reference',
      queries: [
        {
          queryNo: 'AQ1',
          query: 'please check reference',
        },
      ],
    },
    {
      tabName: 'Figure',
      queries: [
        {
          queryNo: 'AQ1',
          query: 'please check figure',
        },
      ],
    },
    {
      tabName: 'attachments',
      queries: [
        {
          queryNo: 'AQ1',
          query: 'please check attachments',
        },
      ],
    },
  ];
}
