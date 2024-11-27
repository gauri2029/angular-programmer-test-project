import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxsModule, Store } from '@ngxs/store';
import { Structure } from '../../models/interface';
import { Observable } from 'rxjs';
import { FetchStructures } from '../../store/app.state';
import { AngularTestStructureDetailComponent } from '../angular-test-structure-detail/angular-test-structure-detail.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-angular-test-structure',
  standalone: true,
  imports: [CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    NgxsModule,
  ],
  templateUrl: './angular-test-structure.component.html',
  styleUrl: './angular-test-structure.component.scss'
})
export class AngularTestStructureComponent {
  structures$: Observable<Structure[]>;

  constructor(private store: Store, private dialog: MatDialog) {
    this.structures$ = this.store.select((state) => state.structures);
  }

  ngOnInit(): void {
    this.store.dispatch(new FetchStructures());
  }

  viewDetails(structure: Structure) {
    if (!structure.id) {
      alert('No ID available for this structure.');
      return;
    }

    this.dialog.open(AngularTestStructureDetailComponent, {
      data: structure,
    });
  }
}