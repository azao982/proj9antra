import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiercoursComponent } from './modifiercours.component';

describe('ModifiercoursComponent', () => {
  let component: ModifiercoursComponent;
  let fixture: ComponentFixture<ModifiercoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifiercoursComponent]
    });
    fixture = TestBed.createComponent(ModifiercoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
