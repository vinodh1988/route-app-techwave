import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceitemComponent } from './serviceitem.component';

describe('ServiceitemComponent', () => {
  let component: ServiceitemComponent;
  let fixture: ComponentFixture<ServiceitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
