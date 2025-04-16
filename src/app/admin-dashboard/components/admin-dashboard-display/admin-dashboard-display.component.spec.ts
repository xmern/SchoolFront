import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardDisplayComponent } from './admin-dashboard-display.component';

describe('AdminDashboardDisplayComponent', () => {
  let component: AdminDashboardDisplayComponent;
  let fixture: ComponentFixture<AdminDashboardDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminDashboardDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminDashboardDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
