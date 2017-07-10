import { Component, OnInit } from '@angular/core';
import { Categoria } from './categoria';
import { Service } from '../app.service';

@Component({
    selector: 'my-app',
    providers: [Service],
    templateUrl: './lista.component.html',
})
export class ListaCategoriasComponent implements OnInit {
    categorias: Categoria[];

    constructor(private categoriaService: Service<Categoria>) { }
    
    getCategorias(): void {
        this.categoriaService.getAll('Categoria')
            .then(categorias => this.categorias = categorias)
            .catch(() => alert('Error al consumir servicio'));
    }

    ngOnInit(): void {
        this.getCategorias();
    }
}