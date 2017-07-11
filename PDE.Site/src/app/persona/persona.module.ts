import { NgModule }                         from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';
import { CommonModule }                     from '@angular/common';
import { HttpModule }                       from '@angular/http';
import { FormsModule }                      from '@angular/forms';
import { RouterModule }                     from '@angular/router';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';

import { PersonaListaComponent }            from './persona-lista/persona-lista.component';
import { PersonaCrearComponent }            from './crear.component';
import { PersonaEditarComponent }           from './editar.component';
//import { PersonaDetalleComponent }        from './detalle.component';
//import { PersonaEliminarComponent }       from './eliminar.component';

import { Service }                          from '../app.service';

@NgModule({
    imports:      [ CommonModule, BrowserModule, HttpModule, FormsModule, RouterModule, MdButtonModule, MdCheckboxModule ],
    declarations: [ PersonaListaComponent, PersonaCrearComponent, PersonaEditarComponent ],
    providers:    [ Service ]
})
export class PersonaModule { }