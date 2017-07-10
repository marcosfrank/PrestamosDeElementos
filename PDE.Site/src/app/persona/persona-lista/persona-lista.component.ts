import { Component, OnInit } from '@angular/core';
import { Service } from '../../app.service'
import { Persona } from '../persona'

@Component({
    selector: 'app-persona-lista',
    templateUrl: './persona-lista.component.html',
    styleUrls: ['./persona-lista.component.css']
})
export class PersonaListaComponent implements OnInit {
    personas: Persona[]
    constructor(private personaService: Service<Persona>) { }

    ngOnInit() {
        this.personaService.getAll('Persona')
            .then(retorno => this.personas = retorno)
            .catch(err => console.log(err));
    }
}