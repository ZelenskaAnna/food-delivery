import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRestarauntsComponent } from './home-restaraunts.component';

describe('HomeRestarauntsComponent', () => {
  let component: HomeRestarauntsComponent;
  let fixture: ComponentFixture<HomeRestarauntsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeRestarauntsComponent]
    });
    fixture = TestBed.createComponent(HomeRestarauntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
