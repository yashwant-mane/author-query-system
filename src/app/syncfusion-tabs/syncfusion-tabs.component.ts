import { Component, OnInit, ViewChild, Query } from '@angular/core';
import { createElement } from '@syncfusion/ej2-base';
import {
  TabComponent,
  SelectEventArgs,
  ClickEventArgs,
} from '@syncfusion/ej2-angular-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
import { element, $ } from 'protractor';

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
  // clickInsideElement(e: Event, className: string) {
  //   var el = (e.srcElement || e.target) as HTMLElement;

  //   if (el.classList.contains(className)) {
  //     return el;
  //   } else {
  //     while ((el = el.parentNode)) {
  //       if (el.classList && el.classList.contains(className)) {
  //         return el;
  //       }
  //     }
  //   }
  // }
  // onResponseClick(event) {
  //   console.log(event.currentTarget);
  //   const response = event.currentTarget;

  //   response.setAttribute('contenteditable', 'true');
  // }

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
