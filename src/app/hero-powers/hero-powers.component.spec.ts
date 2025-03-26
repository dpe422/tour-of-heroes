import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroPowersComponent } from './hero-powers.component';

describe('HeroPowersComponent', () => {
  let component: HeroPowersComponent;
  let fixture: ComponentFixture<HeroPowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroPowersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroPowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
