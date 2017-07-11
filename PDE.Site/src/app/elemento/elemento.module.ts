import { NgModule }                   from '@angular/core';
import { BrowserModule }              from '@angular/platform-browser';
import { CommonModule }               from '@angular/common';
import { HttpModule }                 from '@angular/http';
import { FormsModule }                from '@angular/forms';
import { RouterModule }               from '@angular/router';

import { ElementoListaComponent }    from './lista.component';
import { ElementoDetalleComponent }  from './detalle.component';
import { ElementoCrearComponent }    from './crear.component';
import { ElementoEditarComponent }   from './editar.component';
import { ElementoEliminarComponent } from './eliminar.component';

import { Service }                    from '../app.service';

@NgModule({
    imports: [ CommonModule, BrowserModule, HttpModule, FormsModule, RouterModule ],
    declarations: [
        ElementoListaComponent,
        ElementoDetalleComponent,
        ElementoCrearComponent,
        ElementoEditarComponent,
        ElementoEliminarComponent
    ],
    providers: [ Service ]
})
export class ElementoModule { }