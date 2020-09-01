import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { SyncfusionTabsComponent } from './syncfusion-tabs/syncfusion-tabs.component';

import { TabModule } from '@syncfusion/ej2-angular-navigations';
import { EditorComponent } from './editor/editor.component';
@NgModule({
  declarations: [AppComponent, SyncfusionTabsComponent, EditorComponent],
  imports: [BrowserModule, TabModule, RichTextEditorModule],
  providers: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
