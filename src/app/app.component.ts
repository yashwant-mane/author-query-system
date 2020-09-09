import { Component, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { SyncfusionTabsComponent } from './syncfusion-tabs/syncfusion-tabs.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AuthorQuerySystem';
  isShowDiv: boolean = true;
  constructor() {}
  ngOnInit() {
    $('.right-section').children().hide();
    this.activeEditor();
  }
  doc;
  iframes = document.getElementsByTagName('iframe');
  activeEditor() {
    for (var i = 0, len = this.iframes.length, doc; i < len; ++i) {
      doc =
        this.iframes[i].contentDocument ||
        this.iframes[i].contentWindow.document;
      doc.designMode = 'on';
      this.doc = doc;
    }
  }
  transform(option, argument) {
    this.doc.document.execCommand(option, false, argument);
  }
  appendBrowse() {
    const browseBtn = document.querySelector('custom-toolbar');
    $(browseBtn).append($('.e-file-select-wrap'));
  }

  onTransform() {}
  onBold() {
    document.execCommand('bold');
  }
  onItalic() {
    document.execCommand('italic');
  }
  onUnderline() {
    document.execCommand('underline');
  }
  onSubscript() {
    document.execCommand('subscript');
  }
  onSuperscript() {
    document.execCommand('superscript');
  }

  onAttach() {
    $('.right-section').children().hide();
    $('.attachment-section').show();
    // var element = document.querySelector('.right-section');
    // var attachRef = document
    //   .querySelector('.attachment-section')
    //   .cloneNode(true);
    // var child = element.lastElementChild;
    // while (element.firstChild) {
    //   element.removeChild(element.firstChild);
    //   child = element.lastElementChild;
    // }
    // element.appendChild(attachRef);
    // // this.isShowDiv = !this.isShowDiv;
  }
  onComment() {
    $('.right-section').children().hide();
    $('.response-list-section').show();
    // var element = document.querySelector('.right-section');
    // var attachRef = document
    //   .querySelector('.attachment-section')
    //   .cloneNode(true);
    // var child = element.lastElementChild;
    // while (element.firstChild) {
    //   element.removeChild(element.firstChild);
    //   child = element.lastElementChild;
    // }
    // element.appendChild(attachRef);
    // // this.isShowDiv = !this.isShowDiv;
  }
  acceptResponseArr: { id: string; query: string; response: string }[] = [
    {
      id: 'com1',
      query:
        'Dynamic mechanisms of summer Korean heat waves simulated in a long-term unforced CCSM3',
      response:
        'Dynamic mechanisms of summer Korean heat waves simulated in a long-term unforced CCSM3',
    },
    { id: 'com2', query: 'Han-Kyoung Kim', response: 'Han-Kyoung Kim' },
    { id: 'com3', query: 'Byung-Kwon Moon', response: 'Byung-Kwon Moon' },
    {
      id: 'com4',
      query:
        '	1 Division of Science Education/Institute of Fusion Science, Jeonbuk National University, Jeonju, Korea',
      response:
        '	1 Division of Science Education/Institute of Fusion Science, Jeonbuk National University, Jeonju, Korea',
    },
    {
      id: 'com5',
      query: 'Pacific-Japan teleconnection pattern',
      response: 'Pacific-Japan teleconnection pattern',
    },
    {
      id: 'com6',
      query: 'Community Climate System Model version 3',
      response: 'Community Climate System Model version 3',
    },
  ];
  rejectResponseArr: { query: string; remark: string }[] = [];
  commentArr = [];
  btnClick = 0;
  oldQuery;
  responseCount: number = this.acceptResponseArr.length;
  onResponseAdd() {
    console.log('addedd');
    var responseEditor = $('#response-Editor').html().toString();
    var authorQuery = $('.auQuery').html().toString();
    if (responseEditor == '') {
      alert('please add Response');
    } else {
      if (authorQuery == this.oldQuery) {
        this.btnClick += 0;
      } else {
        this.btnClick += 1;
      }
      this.acceptResponseArr.push({
        id: 'com' + this.btnClick,
        query: authorQuery,
        response: responseEditor,
      });
      console.log(this.acceptResponseArr);
      $('#response-Editor').empty();
      this.oldQuery = authorQuery;
    }
    this.responseCount = this.acceptResponseArr.length;
    console.log(this.responseCount);
  }
  onRemarkAdd() {
    var remarkEditor = $('#remark-Editor').html().toString();
    var authorQuery = $('.auQuery').html().toString();
    if (remarkEditor == '') {
      alert('please add Response');
    } else {
      this.rejectResponseArr.push({ query: authorQuery, remark: remarkEditor });
      console.log(this.rejectResponseArr);
      $('#remark-Editor').empty();
    }
  }
  onResDel(event, i) {
    const index: number = this.acceptResponseArr.indexOf(i);
    this.acceptResponseArr.splice(i, 1);
    this.responseCount = this.acceptResponseArr.length;
  }
  onEditResponse(response, index) {
    $('.right-section').children().hide();
    $('.accept-response-section').show();
    console.log(response, index);
    $('.auQuery').html(response.query);
    $('#response-Editor').html(response.response);
    // $('.response-submit-btn').prop('disabled', true);
  }

  // onCommentAdd() {
  //   var commetEditor = $('#comment-Editor').html().toString();
  //   if (commetEditor == '') {
  //     alert('Please write comment');
  //   } else {
  //     this.commentArr.push(commetEditor);
  //     console.log(commetEditor);
  //     $('#comment-Editor').empty();
  //   }
  // }

  getToolbar() {
    const toolbar = document.getElementById('custom-toolbar');
    return toolbar;
  }
  public path: Object = {
    saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
    removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
  };
  public onUploadSuccess(args: any): void {
    if (args.operation === 'upload') {
      console.log('File uploaded successfully');
    }
  }

  public onUploadFailure(args: any): void {
    console.log('File failed to upload');
  }
}
