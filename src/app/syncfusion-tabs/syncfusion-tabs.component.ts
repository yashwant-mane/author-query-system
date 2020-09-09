import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { createElement } from '@syncfusion/ej2-base';
import {
  TabComponent,
  SelectEventArgs,
  ClickEventArgs,
} from '@syncfusion/ej2-angular-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
import { ReadjsonService } from '../readjson.service';
import { data } from 'jquery';
import { AppComponent } from '../app.component';

enableRipple(true);
@Component({
  selector: 'app-syncfusion-tabs',
  templateUrl: './syncfusion-tabs.component.html',
  styleUrls: ['./syncfusion-tabs.component.css'],
})
export class SyncfusionTabsComponent implements OnInit {
  @ViewChild('element') tabInstance: TabComponent;

  constructor(private readJsonService: ReadjsonService) {}
  AQ: any[] = [];
  ngOnInit(): void {
    this.readJsonService.getJsonData().subscribe((result: any) => {
      this.AQ = result;
      console.log(this.AQ);
    });
  }
  btnClicks = 0;
  oldTarget;
  responseId: any[] = [];
  onReject(event: Event, query) {
    $(event.currentTarget).children().css('color', 'grey');
    $(event.currentTarget).siblings().children().css('color', '#22b24b');
    var newTarget = $(event.currentTarget).parents('tr').html().toString();
    if (newTarget == this.oldTarget) {
      this.btnClicks += 0;
    } else {
      this.btnClicks += 1;
    }
    var eleRef = $(event.currentTarget).parents('tr');
    $(eleRef).attr('id', 'com' + this.btnClicks);
    $('.right-section').children().hide();
    $('.accept-response-section').show();
    $('tr').css('box-shadow', '');
    $(eleRef).css('box-shadow', '0 10px 6px -6px #777');
    var resId = $(eleRef).attr('id');
    this.responseId.push(resId);
    this.oldTarget = newTarget;
    console.log(this.responseId);

    // console.log(event.target);
    // var element = document.querySelector('.right-section');
    // var acceptResponseRef = document
    //   .querySelector('.accept-response-section')
    //   .cloneNode(true);
    // var child = element.lastElementChild;
    // while (element.firstChild) {
    //   element.removeChild(element.firstChild);
    //   child = element.lastElementChild;
    // }
    // element.appendChild(acceptResponseRef);
  }
  onAccept(event: Event, query) {
    $('.right-section').children().hide();
    $(event.currentTarget).children().css('color', 'grey');
    $(event.currentTarget).siblings().children().css('color', '#d64113');
    var eleRef = $(event.currentTarget).parents('tr');
    $('tr').css('box-shadow', '');
    $(eleRef).css('box-shadow', '0 10px 6px -6px #777');

    // $('.right-section').children().hide();
    // $('.reject-response-section').show();
    // $('.auQuery').html(query);
    // var element = document.querySelector('.right-section');
    // var rejectResponseRef = document
    //   .querySelector('.reject-response-section')
    //   .cloneNode(true);
    // var child = element.lastElementChild;
    // while (element.firstChild) {
    //   element.removeChild(element.firstChild);
    //   child = element.lastElementChild;
    // }
    // element.appendChild(rejectResponseRef);
  }
}
