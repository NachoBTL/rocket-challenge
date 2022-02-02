import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesDetailComponent } from './launches-detail.component';

describe('LaunchesDetailComponent', () => {
  let component: LaunchesDetailComponent;
  let fixture: ComponentFixture<LaunchesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
