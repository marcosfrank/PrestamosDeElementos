import { Component } from '@angular/core';

@Component({
    selector: 'menu',
    template: `<div>
        <ul>
            <li *ngFor="let modulo in modulos">
                {{ modulo }}
                <ul>
                    <li><a (click)="">Nuevo</a></li>
                    <li><a (click)="">Editar</a></li>
                    <li><a (click)="">Eliminar</a></li>
                    <li><a (click)="">Listado</a></li>
                </ul>
            </li>
        </ul>
    </div>`,
})
export class MenuComponent {
    modulos = ['Categorias', 'Elementos', 'Personas', 'Usuarios', 'Prestamos']
}