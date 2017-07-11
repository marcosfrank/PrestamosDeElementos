import { NgModule }                   from '@angular/core';
import { BrowserModule }              from '@angular/platform-browser';
import { CommonModule }               from '@angular/common';
import { HttpModule }                 from '@angular/http';
import { FormsModule }                from '@angular/forms';
import { RouterModule }               from '@angular/router';

import { CategoriaListaComponent }    from './lista.component';
import { CategoriaDetalleComponent }  from './detalle.component';
import { CategoriaCrearComponent }    from './crear.component';
import { CategoriaEditarComponent }   from './editar.component';
import { CategoriaEliminarComponent } from './eliminar.component';

import { Service }                    from '../app.service';

@NgModule({
    imports: [ CommonModule, BrowserModule, HttpModule, FormsModule, RouterModule ],
    declarations: [
        CategoriaListaComponent,
        CategoriaDetalleComponent,
        CategoriaCrearComponent,
        CategoriaEditarComponent,
        CategoriaEliminarComponent
    ],
    providers: [ Service ]
})
export class CategoriaModule { }