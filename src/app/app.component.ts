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
  }
  appendBrowse() {
    const browseBtn = document.querySelector('custom-toolbar');
    $(browseBtn).append($('.e-file-select-wrap'));
  }
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
    $('.comment-section').show();
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
    { id: '1', query: 'chech name', response: 'ok' },
  ];
  rejectResponseArr: { query: string; remark: string }[] = [];
  commentArr = [];
  btnClick = 0;
  oldQuery;
  onResponseAdd() {
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
  onLiClick(item) {}
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
