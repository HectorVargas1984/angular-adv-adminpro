import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit{


  ngOnInit(): void {
    this.getUsuarios().then(usuarios =>{
      console.log(usuarios)
    });
  }

getUsuarios(){

  const promesa = new Promise((res, rej) =>{
    fetch('https://reqres.in/api/users')
    .then(resp => resp.json())
    .then(body => res(body.data))

  });

  return promesa;
  
  
}

  
}

