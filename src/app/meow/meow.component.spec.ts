import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatologyComponent } from './meow.component';

describe('CatologyComponent', () => {
  let component: CatologyComponent;
  let fixture: ComponentFixture<CatologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatologyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CatologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
