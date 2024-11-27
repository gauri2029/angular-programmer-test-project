import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { DataService } from '../../services/data.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxsModule, Store } from '@ngxs/store';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-angular-test-structure-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    NgxsModule,
    MatDialogModule,
    MatIconModule
  ],
  templateUrl: './angular-test-structure-detail.component.html',
  styleUrl: './angular-test-structure-detail.component.scss'
})
export class AngularTestStructureDetailComponent {
  detail: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dataService: DataService) {
    this.dataService.fetchStructureDetail(data.id).subscribe({
      next: (detail) => (this.detail = detail),
      error: () => alert('Failed to fetch details'),
    });
  }
}
