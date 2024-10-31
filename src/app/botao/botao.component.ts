import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  standalone: true,
  imports: [],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.css'
})

export class BotaoComponent {
  //recebi
  @Input() texto: string = 'Clique aqui';
  //mandei
  @Output() redressa = new EventEmitter();

  clicoDoComponent(){
    this.redressa.emit();
  }

  //evento enviado
  // clicoDoComponent(){
  //   this.redressa.emit('Veio pelo evento');
  // }
}
