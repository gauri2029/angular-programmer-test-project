import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTestStructureDetailComponent } from './angular-test-structure-detail.component';

describe('AngularTestStructureDetailComponent', () => {
  let component: AngularTestStructureDetailComponent;
  let fixture: ComponentFixture<AngularTestStructureDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularTestStructureDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularTestStructureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
