import { Component, OnInit } from '@angular/core';

import { Usuario } from './usuario';
import { Service } from '../app.service';

@Component({
    selector: 'my-app',
    providers: [Service],
    templateUrl: './lista.component.html',
})
export class UsuarioListaComponent implements OnInit {
    usuarios: Usuario[];

    constructor(private service: Service<Usuario>) { }
    
    getUsuarios(): void {
        this.service.getAll('Usuario')
            .then(usuarios => this.usuarios = usuarios)
            .catch(() => alert('Error al consumir servicio'));
    }

    ngOnInit(): void {
        this.getUsuarios();
    }
}