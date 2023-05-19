import { Component } from '@angular/core';
import { Observable, interval, map, retry, take } from 'rxjs';

@Component({
    selector: 'app-rxjs',
    templateUrl: './rxjs.component.html',
    styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent {

    constructor() {

        // this.retornaObservable().pipe(
        //     retry(1) // es para hacer la repeticiones 
        // ).subscribe({
        //     next: (valor: number) => console.log('Subs', valor),
        //     error: (error: Error) => console.warn('Error', error),
        //     complete: () => console.info('retornaObservable terminado')
        // })

        this.intervalorRetorna().subscribe(console.log)



    }

    intervalorRetorna(): Observable<number> {
        return interval(1000).pipe(
            take(4), // sirbe para las veces que se tiene que ejecutar
            map(valor => valor + 1)
        );
    }

    retornaObservable(): Observable<number> {

        let i = -1

        return new Observable<number>(observe => {

            const intervalo = setInterval(() => {

                i++;
                observe.next(i)

                if (i === 4) {
                    clearInterval(intervalo)
                    observe.complete()
                }

                if (i === 2) {
                    i = 0;
                    observe.error('i lledo al valor de 2')
                }

            }, 1000)

        });

    }

}

