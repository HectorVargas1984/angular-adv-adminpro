import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit{

 
  @Input() progreso: number = 40;
  @Input() btnClass: string = 'btn-primary';


  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }


  cambiarValor(valor: number){

    if(this.progreso >=100 && valor >=0){
      this.valorSalida.emit(100)
      return this.progreso = 100;
    }

    if(this.progreso <=0 && valor < 0){
      this.valorSalida.emit(0)
      return this.progreso = 0;
    }
    this.progreso = this.progreso + valor
    this.valorSalida.emit(this.progreso)
    return this.progreso
    
  }

  onChange(valor:number){
    if(valor >=100){
      this.progreso = 100;
    }else if(valor <= 0){
      this.progreso = 0
    }else {
      this.progreso = valor;
    }

    this.valorSalida.emit(this.progreso)
  }

}
