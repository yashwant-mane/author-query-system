import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SyncfusionTabsComponent } from './syncfusion-tabs/syncfusion-tabs.component';

import { TabModule } from '@syncfusion/ej2-angular-navigations';
@NgModule({
  declarations: [AppComponent, SyncfusionTabsComponent],
  imports: [BrowserModule, TabModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
