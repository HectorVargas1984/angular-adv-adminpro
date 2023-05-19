import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
<<<<<<< HEAD
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // const promesa = new Promise((res, rej) => {

    //   if (false) {
    //     res('hola mundo')
    //   } else {
    //     rej('Algo salio mal')
    //   }

    // })


    // promesa.then((mensaje) => {
    //   console.log(mensaje);
    // }).catch(error => console.log('Error en mi promesa'))

    // console.log('fin del Init');

    this.getUsuarios().then(data => {
      console.log(data);
    })

  }

  getUsuarios() {

    return new Promise(resolve => {

      fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(body => resolve(body.data))
    })

  }

}
=======
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

>>>>>>> cdb6002aff6201e7bdb05ba6a9b82d97c7fa226f
