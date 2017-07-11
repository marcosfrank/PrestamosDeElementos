import { NgModule }                   from '@angular/core';
import { BrowserModule }              from '@angular/platform-browser';
import { CommonModule }               from '@angular/common';
import { HttpModule }                 from '@angular/http';
import { FormsModule }                from '@angular/forms';
import { RouterModule }               from '@angular/router';

import { ListaCategoriaComponent }    from './lista.component';
import { DetalleCategoriaComponent }  from './detalle.component';
import { CrearCategoriaComponent }    from './crear.component';
import { EditarCategoriaComponent }   from './editar.component';
import { EliminarCategoriaComponent } from './eliminar.component';

import { Service }                    from '../app.service';

@NgModule({
    imports: [ CommonModule, BrowserModule, HttpModule, FormsModule, RouterModule ],
    declarations: [
        ListaCategoriaComponent,
        EditarCategoriaComponent,
        CrearCategoriaComponent,
        DetalleCategoriaComponent,
        EliminarCategoriaComponent
    ],
    providers: [ Service ]
})
export class CategoriaModule { }