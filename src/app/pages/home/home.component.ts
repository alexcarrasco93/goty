import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { Game } from '../../interfaces/game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  games$ = this.db
    .collection<Game>('goty')
    .valueChanges()
    .pipe(
      map((res) =>
        res.map(({ name, votes }) => {
          return { name, value: votes };
        })
      )
    );

  constructor(private db: AngularFirestore) {}
}
