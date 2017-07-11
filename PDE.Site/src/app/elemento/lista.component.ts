import { Component, OnInit } from '@angular/core';
import { Elemento } from './elemento';
import { Service } from '../app.service';

@Component({
    selector: 'my-app',
    providers: [Service],
    templateUrl: './lista.component.html',
})
export class ElementoListaComponent implements OnInit {
    elementos: Elemento[];

    constructor(private service: Service<Elemento>) { }
    
    getElementos(): void {
        this.service.getAll('Elemento')
            .then(elementos => this.elementos = elementos)
            .catch(() => alert('Error al consumir servicio'));
    }

    ngOnInit(): void {
        this.getElementos();
    }
}