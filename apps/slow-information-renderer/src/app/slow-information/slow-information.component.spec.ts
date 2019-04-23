import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlowInformationComponent } from './slow-information.component';

describe('SlowInformationComponent', () => {
  let component: SlowInformationComponent;
  let fixture: ComponentFixture<SlowInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlowInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlowInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
