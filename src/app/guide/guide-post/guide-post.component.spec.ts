import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidePostComponent } from './guide-post.component';

describe('GuidePostComponent', () => {
  let component: GuidePostComponent;
  let fixture: ComponentFixture<GuidePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuidePostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GuidePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
