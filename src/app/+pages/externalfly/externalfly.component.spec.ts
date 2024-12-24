import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalflyComponent } from './externalfly.component';

describe('ExternalflyComponent', () => {
  let component: ExternalflyComponent;
  let fixture: ComponentFixture<ExternalflyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExternalflyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalflyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
