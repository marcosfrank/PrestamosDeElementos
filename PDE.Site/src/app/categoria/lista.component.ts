import { Component, OnInit } from '@angular/core';
import { Categoria } from './categoria';
import { Service } from '../app.service';

@Component({
    selector: 'my-app',
    providers: [ Service ],
    template: `<h2>Listado de categor&iacute;as</h2>
        <p><a href="Create">Crear</a></p>
        <table class="table">
            <tr>
                <th>Descripcion</th>
                <th>Fecha de Creacion</th>
                <th></th>
            </tr>
            <tr *ngFor="let item of categorias">
                <td>{{ item.Descripcion }}</td>
                <td>{{ item.FechaCreacion | date: 'dd/MM/yyyy' }}</td>
                <td>
                    <a [href]="'Update/' + item.Id">Editar</a> |
                    <a [href]="'Search/' + item.Id">Detalles</a> |
                    <a [href]="'Remove/' + item.Id">Eliminar</a>
                </td>
            </tr>
        </table>`,
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