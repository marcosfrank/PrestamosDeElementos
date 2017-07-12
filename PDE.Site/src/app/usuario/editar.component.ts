import { Component, OnInit }                from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Usuario }                          from './usuario';
import { Service }                          from '../app.service';

@Component({
    selector: 'my-app',
    providers: [Service],
    templateUrl: './editar.component.html',
})
export class UsuarioEditarComponent implements OnInit {
    usuario: Usuario;
    title: string;

    constructor(private route: ActivatedRoute, private router: Router, private service: Service<Usuario>) { }
    
    getUsuario(id: number): void {
        this.service.getOne('Usuario', id)
            .then(usuario => this.usuario = usuario)
            .catch(() => alert('Error al consumir servicio'));
    }

    save(usuario: Usuario): void {
        this.service.update('Usuario', usuario)
            .then(usuario => {
                this.usuario = usuario;
                this.router.navigate(['/Usuarios/lista']);
            })
            .catch(() => alert('Error al consumir servicio'));
    }

    ngOnInit(): void {
        this.title = 'Editar';
        this.usuario = new Usuario();
        let id = this.route.snapshot.paramMap.get('id');
        this.getUsuario(+id);
    }
}