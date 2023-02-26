import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Player } from "../../_interfaces/player.interface";

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})

export class PlayersComponent {



  @Input("player")
  player: Player;

  @Input()
  team: string = "Without team";

  @Output("onActivate")
  status:EventEmitter<boolean> = new EventEmitter<boolean>;

  constructor () {

  }

  ngOnInit() {

  }

  desactivate() {
    this.status.emit(false)
  }


}
