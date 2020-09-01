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
    $(appParent).empty();
    $(appParent).append($('.e-toolbar-wrapper'));
  }
  public tools = {
    type: 'MultiRow',
    items: [
      'Bold',
      'Italic',
      'Undo',
      'Redo',
      'SubScript',
      'SuperScript',
      {
        tooltipText: 'Attach file',
        undo: true,
        click: this.onAttachClick.bind(this),
        template:
          '<button class="e-tbar-btn e-control e-btn e-lib e-icon-btn" tabindex="-1" id="custom_tbar" style="width:100%; "><div class="e-tbar-btn-text" style="font-weight: 500;"><i class="fa fa-paperclip"></i></div></button>',
      },
    ],
  };
  onAttachClick() {
    alert('Attachments');
  }
  public testProp = {
    name: 'John Doe',
  };
  public data = [
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
