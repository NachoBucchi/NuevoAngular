import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Player } from "../../_interfaces/player.interface";

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.scss']
})

export class JugadoresComponent {



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
