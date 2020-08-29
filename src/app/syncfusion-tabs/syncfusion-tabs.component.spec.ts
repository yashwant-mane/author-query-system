import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncfusionTabsComponent } from './syncfusion-tabs.component';

describe('SyncfusionTabsComponent', () => {
  let component: SyncfusionTabsComponent;
  let fixture: ComponentFixture<SyncfusionTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyncfusionTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncfusionTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
