import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VilaComponent } from './vila.component';

describe('VilaComponent', () => {
  let component: VilaComponent;
  let fixture: ComponentFixture<VilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VilaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
