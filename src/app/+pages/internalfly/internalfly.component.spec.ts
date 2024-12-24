import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalflyComponent } from './internalfly.component';

describe('InternalflyComponent', () => {
  let component: InternalflyComponent;
  let fixture: ComponentFixture<InternalflyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternalflyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalflyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
