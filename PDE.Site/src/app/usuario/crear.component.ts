import { Component, OnInit }                from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Usuario }                          from './usuario';
import { Service }                          from '../app.service';

@Component({
    selector: 'my-app',
    providers: [Service],
    templateUrl: './editar.component.html',
})
export class UsuarioCrearComponent implements OnInit {
    usuario: Usuario;
    title: string;

    constructor(private route: ActivatedRoute, private router: Router, private service: Service<Usuario>) { }
    
    save(usuario: Usuario): void {
        this.service.add('Usuario', usuario)
            .then(usuario => {
                this.usuario = usuario;
                this.router.navigate(['/Usuarios/lista']);
            })
            .catch(() => alert('Error al consumir servicio'));
    }

    ngOnInit(): void {
        this.usuario = new Usuario();
        this.title = 'Crear';
    }
}