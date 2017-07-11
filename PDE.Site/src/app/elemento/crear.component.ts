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
export class ElementoCrearComponent implements OnInit {
    elemento: Elemento;
    categorias: Categoria[];
    title: string;

    constructor(private route: ActivatedRoute, private router: Router, private service: Service<Elemento>) { }

    getCategorias(): void {
        this.service.getAll('Categoria')
            .then(categorias => this.categorias = categorias)
            .catch(() => alert('Error al consumir servicio'));
    }
    
    save(elemento: Elemento): void {
        this.service.add('Elemento', elemento)
            .then(elemento => {
                this.elemento = elemento;
                this.router.navigate(['/Elementos/lista']);
            })
            .catch(() => alert('Error al consumir servicio'));
    }

    ngOnInit(): void {
        this.getCategorias();
        this.elemento = new Elemento();
        this.elemento.Categoria = new Categoria();
        this.title = 'Crear';
    }
}