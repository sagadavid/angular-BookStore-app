import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentsBooksComponent } from './recents-books.component';

describe('RecentsBooksComponent', () => {
  let component: RecentsBooksComponent;
  let fixture: ComponentFixture<RecentsBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentsBooksComponent]
    });
    fixture = TestBed.createComponent(RecentsBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
