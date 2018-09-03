import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasListComponent } from './notas-list.component';

describe('NotasListComponent', () => {
  let component: NotasListComponent;
  let fixture: ComponentFixture<NotasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});