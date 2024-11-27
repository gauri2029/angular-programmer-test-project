import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTestStructureComponent } from './angular-test-structure.component';

describe('AngularTestStructureComponent', () => {
  let component: AngularTestStructureComponent;
  let fixture: ComponentFixture<AngularTestStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularTestStructureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularTestStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
