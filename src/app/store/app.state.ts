import { State, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Structure } from '../models/interface';
import { tap } from 'rxjs/operators';
import { DataService } from '../services/data.service';

export class FetchStructures {
  static readonly type = '[App] Fetch Structures';
}

@State<Structure[]>({
  name: 'structures',
  defaults: [],
})
@Injectable()
export class AppState {
  constructor(private dataService: DataService) {}

  @Action(FetchStructures)
  fetchStructures(ctx: StateContext<Structure[]>) {
    return this.dataService.fetchAnatomicalStructures().pipe(
      tap((structures) => ctx.setState(structures))
    );
  }
}
