import { Component, OnInit } from '@angular/core';
import {
  ToolbarService,
  LinkService,
  ImageService,
  HtmlEditorService,
} from '@syncfusion/ej2-angular-richtexteditor';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService],
})
export class EditorComponent implements OnInit {
  constructor(private appComponent: AppComponent) {}

  ngOnInit(): void {}
  onCreate(event): void {
    const appParent = this.appComponent.getToolbar();
    $(appParent).append($('.e-toolbar-wrapper'));
  }
  public tools = {
    type: 'MultiRow',
    items: ['Bold', 'Italic', 'Undo', 'Redo', 'SubScript', 'SuperScript'],
  };

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
