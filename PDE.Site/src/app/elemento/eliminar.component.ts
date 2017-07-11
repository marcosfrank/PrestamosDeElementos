import { Component, OnInit }                from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Categoria }                        from '../categoria/categoria';
import { Elemento }                         from './elemento';
import { Service }                          from '../app.service';

@Component({
    selector: 'my-app',
    providers: [Service],
    templateUrl: './eliminar.component.html',
})
export class ElementoEliminarComponent implements OnInit {
    elemento: Elemento;

    constructor(private route: ActivatedRoute, private router: Router, private service: Service<Elemento>) { }
    
    getElemento(id: number): void {
        this.service.getOne('Elemento', id)
            .then(elemento => this.elemento = elemento)
            .catch(() => alert('Error al consumir servicio'));
    }

    delete(elemento: Elemento): void {
        this.service.delete('Elemento', elemento.Id)
            .then(() => this.router.navigate(['/Elementos/lista']))
            .catch(() => alert('Error al consumir servicio'));
    }

    ngOnInit(): void {
        this.elemento = new Elemento();
        this.elemento.Categoria = new Categoria();
        let id = this.route.snapshot.paramMap.get('id');
        this.getElemento(+id);
    }
}