import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageClientHomeComponent } from './page-client-home.component';

describe('PageClientHomeComponent', () => {
  let component: PageClientHomeComponent;
  let fixture: ComponentFixture<PageClientHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageClientHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageClientHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
