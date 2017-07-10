import { Component, OnInit }                from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Categoria }                        from './categoria';
import { Service }                          from '../app.service';

@Component({
    selector: 'my-app',
    providers: [Service],
    templateUrl: './editar.component.html',
})
export class CrearCategoriaComponent implements OnInit {
    categoria: Categoria;
    title: string;

    constructor(private route: ActivatedRoute, private router: Router, private service: Service<Categoria>) { }
    
    save(categoria: Categoria): void {
        this.service.add('Categoria', categoria)
            .then(categoria => {
                this.categoria = categoria;
                this.router.navigate(['/Categorias/lista']);
            })
            .catch(() => alert('Error al consumir servicio'));
    }

    ngOnInit(): void {
        this.categoria = new Categoria();
        this.title = 'Crear';
    }
}