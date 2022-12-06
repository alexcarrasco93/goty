import { Component } from '@angular/core';
import Swal from 'sweetalert2';

import { Game } from '../../interfaces/game';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css'],
})
export class GotyComponent {
  games$ = this.gameService.games$;

  constructor(private gameService: GameService) {}

  voteGame(game: Game) {
    this.gameService.voteApiRequest$(game.id).subscribe({
      next(res) {
        Swal.fire('Thanks', res.msg, 'success');
      },
      error(err) {
        console.log(err);
        Swal.fire('Oops', err.error.msg, 'error');
      },
    });
  }
}
