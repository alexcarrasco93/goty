import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  mergeMap,
  shareReplay,
  throwError,
} from 'rxjs';
import Swal from 'sweetalert2';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/game';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private _games$ = new BehaviorSubject<void>(undefined);
  private gamesApiRequest$ = this.http.get<Game[]>(
    `${environment.base_url}/goty`
  );

  games$ = this._games$.pipe(
    mergeMap(() => this.gamesApiRequest$),
    shareReplay(1)
  );
  voteApiRequest$ = (id: string) =>
    this.http.post<{ msg: string }>(`${environment.base_url}/goty/${id}`, {});

  constructor(private http: HttpClient) {}

  updateGames() {
    this._games$.next();
  }
}
