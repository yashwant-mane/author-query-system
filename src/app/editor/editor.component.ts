import { Component, OnInit } from '@angular/core';
import {
  ToolbarService,
  LinkService,
  ImageService,
  HtmlEditorService,
} from '@syncfusion/ej2-angular-richtexteditor';
import { AppComponent } from '../app.component';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService],
})
export class EditorComponent implements OnInit {
  constructor(private appComponent: AppComponent) {}
  ngAfterView() {}
  Metadata = [];
  title = 'title';
  ngOnInit(): void {}
  ngAfterViewInit() {}
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
  // public theads = ['Elemnets', 'Manuscript', 'Status', 'Response'];
  // public Metadata = [
  //   {
  //     Elemnet: 'title',
  //     Manuscript: [
  //       'Survival and migration patterns of naturally- and hatchery-reared Atlantic salmon (Salmo salar) smolts in a Lake Ontario tributary using acoustic telemetry',
  //     ],
  //   },
  //   {
  //     Elemnet: 'Author',
  //     Manuscript: [
  //       'DR. AARON THOMAS FISK',
  //       'Sarah M. Larocque',
  //       'Aaron T. Fisk',
  //       'Timothy B. Johnson',
  //     ],
  //   },
  //   {
  //     Elemnet: 'Affiliation',
  //     Manuscript: [
  //       'slarocque9@gmail.comafisk@uwindsor.ca Great Lakes Institute for Environmental Research, University of Windsor, Windsor, Ontario, N9B 3P4, Canada (SML: slarocque9@gmail.com; ATF: afisk@uwindsor.ca)',
  //       'tim.johnson@ontario.ca Glenora Fisheries Station, Ontario Ministry of Natural Resources and Forestry, 41 Hatchery Lane, Picton, Ontario, K0K 2T0, Canada (TBJ: tim.johnson@ontario.ca)',
  //     ],
  //   },
  // ];
}
