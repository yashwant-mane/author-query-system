import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { SyncfusionTabsComponent } from './syncfusion-tabs/syncfusion-tabs.component';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { RadioButtonModule } from '@syncfusion/ej2-angular-buttons';

import { ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns';

import { TabModule } from '@syncfusion/ej2-angular-navigations';
import { EditorComponent } from './editor/editor.component';
@NgModule({
  declarations: [AppComponent, SyncfusionTabsComponent, EditorComponent],
  imports: [
    BrowserModule,
    TabModule,
    RichTextEditorModule,
    HttpClientModule,
    UploaderModule,
    RadioButtonModule,
    ComboBoxModule,
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
