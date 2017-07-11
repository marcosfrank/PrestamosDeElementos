import { Component, OnInit }                from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Persona }                          from './persona';
import { Service }                          from '../app.service';

@Component({
    selector: 'my-app',
    providers: [Service],
    templateUrl: './editar.component.html',
})
export class PersonaCrearComponent implements OnInit {
    persona: Persona;
    title: string;

    constructor(private route: ActivatedRoute, private router: Router, private service: Service<Persona>) { }
    
    save(persona: Persona): void {
        this.service.add('Persona', persona)
            .then(persona => {
                this.persona = persona;
                this.router.navigate(['/Personas/lista']);
            })
            .catch(() => alert('Error al consumir servicio'));
    }

    ngOnInit(): void {
        this.persona = new Persona();
        this.title = 'Crear';
    }
}