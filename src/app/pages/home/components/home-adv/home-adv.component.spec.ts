import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdvComponent } from './home-adv.component';

describe('HomeAdvComponent', () => {
  let component: HomeAdvComponent;
  let fixture: ComponentFixture<HomeAdvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeAdvComponent]
    });
    fixture = TestBed.createComponent(HomeAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
