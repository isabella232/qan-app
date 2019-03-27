import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QanTableHeaderCellComponent } from './qan-table-header-cell.component';

describe('QanTableHeaderCellComponent', () => {
  let component: QanTableHeaderCellComponent;
  let fixture: ComponentFixture<QanTableHeaderCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QanTableHeaderCellComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QanTableHeaderCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});