import { Component, OnInit }                from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Categoria }                        from './categoria';
import { Service }                          from '../app.service';

@Component({
    selector: 'my-app',
    providers: [Service],
    templateUrl: './editar.component.html',
})
export class CategoriaEditarComponent implements OnInit {
    categoria: Categoria;
    title: string;

    constructor(private route: ActivatedRoute, private router: Router, private service: Service<Categoria>) { }
    
    getCategoria(id: number): void {
        this.service.getOne('Categoria', id)
            .then(categoria => this.categoria = categoria)
            .catch(() => alert('Error al consumir servicio'));
    }

    save(categoria: Categoria): void {
        this.service.update('Categoria', categoria)
            .then(categoria => {
                this.categoria = categoria;
                this.router.navigate(['/Categorias/lista']);
            })
            .catch(() => alert('Error al consumir servicio'));
    }

    ngOnInit(): void {
        this.title = 'Editar';
        this.categoria = new Categoria();
        let id = this.route.snapshot.paramMap.get('id');
        this.getCategoria(+id);
    }
}