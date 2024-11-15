import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangkauiAngularComponent } from './rangkaui-angular.component';

describe('RangkauiAngularComponent', () => {
  let component: RangkauiAngularComponent;
  let fixture: ComponentFixture<RangkauiAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RangkauiAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RangkauiAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
