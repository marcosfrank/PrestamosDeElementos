import { Component, OnInit }                from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Persona }                          from './persona';
import { Service }                          from '../app.service';

@Component({
    selector: 'my-app',
    providers: [Service],
    templateUrl: './editar.component.html',
})
export class PersonaEditarComponent implements OnInit {
    persona: Persona;
    title: string;

    constructor(private route: ActivatedRoute, private router: Router, private service: Service<Persona>) { }
    
    getPersona(id: number): void {
        this.service.getOne('Persona', id)
            .then(persona => this.persona = persona)
            .catch(() => alert('Error al consumir servicio'));
    }

    save(persona: Persona): void {
        this.service.update('Persona', persona)
            .then(persona => {
                this.persona = persona;
                this.router.navigate(['/Personas/lista']);
            })
            .catch(() => alert('Error al consumir servicio'));
    }

    ngOnInit(): void {
        this.title = 'Editar';
        this.persona = new Persona();
        let id = this.route.snapshot.paramMap.get('id');
        this.getPersona(+id);
    }
}