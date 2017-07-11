import { Component, OnInit }                from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Categoria }                        from '../categoria/categoria';
import { Elemento }                         from './elemento';
import { Service }                          from '../app.service';

@Component({
    selector: 'my-app',
    providers: [Service],
    templateUrl: './editar.component.html',
})
export class ElementoEditarComponent implements OnInit {
    elemento: Elemento;
    categorias: Categoria[];
    title: string;

    constructor(private route: ActivatedRoute, private router: Router, private service: Service<Elemento>) { }
    
    getElemento(id: number): void {
        this.service.getOne('Elemento', id)
            .then(elemento => this.elemento = elemento)
            .catch(() => alert('Error al consumir servicio'));
    }

    getCategorias(): void {
        this.service.getAll('Categoria')
            .then(categorias => this.categorias = categorias)
            .catch(() => alert('Error al consumir servicio'));
    }

    save(elemento: Elemento): void {
        this.service.update('Elemento', elemento)
            .then(elemento => {
                this.elemento = elemento;
                this.router.navigate(['/Elementos/lista']);
            })
            .catch(() => alert('Error al consumir servicio'));
    }

    ngOnInit(): void {
        this.title = 'Editar';
        this.getCategorias();
        this.elemento = new Elemento();
        this.elemento.Categoria = new Categoria();
        let id = this.route.snapshot.paramMap.get('id');
        this.getElemento(+id);
    }
}