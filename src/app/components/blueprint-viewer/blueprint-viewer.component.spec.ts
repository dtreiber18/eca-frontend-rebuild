import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueprintViewerComponent } from './blueprint-viewer.component';

describe('BlueprintViewerComponent', () => {
  let component: BlueprintViewerComponent;
  let fixture: ComponentFixture<BlueprintViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlueprintViewerComponent]
    });
    fixture = TestBed.createComponent(BlueprintViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
