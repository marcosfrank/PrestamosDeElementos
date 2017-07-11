import { NgModule }                   from '@angular/core';
import { BrowserModule }              from '@angular/platform-browser';
import { RouterModule, Routes }       from '@angular/router';

import { AppComponent }               from './app.component';
import { MenuComponent }              from './util/menu.component';

import { CategoriaModule }            from './categoria/categoria.module';
import { PersonaModule }              from './persona/persona.module';
import { ElementoModule }             from './elemento/elemento.module';

import { CategoriaListaComponent }    from './categoria/lista.component';
import { CategoriaDetalleComponent }  from './categoria/detalle.component';
import { CategoriaEditarComponent }   from './categoria/editar.component';
import { CategoriaCrearComponent }    from './categoria/crear.component';
import { CategoriaEliminarComponent } from './categoria/eliminar.component';

import { PersonaListaComponent }      from './persona/persona-lista/persona-lista.component';
import { PersonaCrearComponent }      from './persona/crear.component';
import { PersonaEditarComponent }     from './persona/editar.component';
import { PersonaEliminarComponent }   from './persona/eliminar.component';
import { PersonaDetalleComponent }    from './persona/detalle.component';

import { ElementoListaComponent }     from './elemento/lista.component';
import { ElementoCrearComponent }     from './elemento/crear.component';
import { ElementoEditarComponent }    from './elemento/editar.component';
import { ElementoEliminarComponent }  from './elemento/eliminar.component';
import { ElementoDetalleComponent }   from './elemento/detalle.component';

const appRoutes: Routes = [
    { path: 'Categorias/lista',         component: CategoriaListaComponent },
    { path: 'Categorias/detalles/:id',  component: CategoriaDetalleComponent },
    { path: 'Categorias/crear',         component: CategoriaCrearComponent },
    { path: 'Categorias/editar/:id',    component: CategoriaEditarComponent },
    { path: 'Categorias/eliminar/:id',  component: CategoriaEliminarComponent },

    { path: 'Personas/lista',           component: PersonaListaComponent },
    { path: 'Personas/crear',           component: PersonaCrearComponent },
    { path: 'Personas/editar/:id',      component: PersonaEditarComponent },
    { path: 'Personas/eliminar/:id',    component: PersonaEliminarComponent },
    { path: 'Personas/detalles/:id',    component: PersonaDetalleComponent },

    { path: 'Elementos/lista',          component: ElementoListaComponent },
    { path: 'Elementos/crear',          component: ElementoCrearComponent },
    { path: 'Elementos/editar/:id',     component: ElementoEditarComponent },
    { path: 'Elementos/eliminar/:id',   component: ElementoEliminarComponent },
    { path: 'Elementos/detalles/:id',   component: ElementoDetalleComponent },
    //{
    //    path: '',
    //    redirectTo: '/index.html',
    //    pathMatch: 'full'
    //},
    //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports:      [ BrowserModule, CategoriaModule, PersonaModule, ElementoModule, RouterModule.forRoot(appRoutes) ],
    declarations: [ AppComponent, MenuComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }