import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public operandoA:number = 0;
  public operandoB: number = 0;
  public resultado: number = 0;

  obtenerValorA(event:Event){
    this.operandoA = Number((<HTMLInputElement>event.target).value);
  }

  obtenerValorB(event:Event){
    this.operandoB = Number((<HTMLInputElement>event.target).value);
  }

  sumar(){
    this.resultado = this.operandoA + this.operandoB
  }
}
