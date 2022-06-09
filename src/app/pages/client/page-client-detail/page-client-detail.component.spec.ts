import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageClientDetailComponent } from './page-client-detail.component';

describe('PageClientDetailComponent', () => {
  let component: PageClientDetailComponent;
  let fixture: ComponentFixture<PageClientDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageClientDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageClientDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
