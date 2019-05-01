import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloContainerComponent } from './hello-container.component';

describe('HelloContainerComponent', () => {
  let component: HelloContainerComponent;
  let fixture: ComponentFixture<HelloContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
