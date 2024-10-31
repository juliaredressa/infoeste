import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BotaoComponent } from "./botao/botao.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BotaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curso-infoeste';
  
  textodobotao = 'Texto que veio do servidor';

  clicouNoBotao(textoAlterado: string) {
    alert(textoAlterado);
  }
}
