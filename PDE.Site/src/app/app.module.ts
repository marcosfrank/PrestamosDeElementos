import { NgModule }                   from '@angular/core';
import { BrowserModule }              from '@angular/platform-browser';
import { RouterModule, Routes }       from '@angular/router';

import { AppComponent }               from './app.component';
import { MenuComponent }              from './util/menu.component';

import { CategoriaModule }            from './categoria/categoria.module';
import { PersonaModule }              from './persona/persona.module';

import { ListaCategoriaComponent }    from './categoria/lista.component';
import { DetalleCategoriaComponent }  from './categoria/detalle.component';
import { EditarCategoriaComponent }   from './categoria/editar.component';
import { CrearCategoriaComponent }    from './categoria/crear.component';
import { EliminarCategoriaComponent } from './categoria/eliminar.component';

import { PersonaListaComponent }      from './persona/persona-lista/persona-lista.component';
import { PersonaCrearComponent }      from './persona/crear.component';
import { PersonaEditarComponent }     from './persona/editar.component';

const appRoutes: Routes = [
    { path: 'Categorias/lista', component: ListaCategoriaComponent },
    { path: 'Categorias/detalles/:id', component: DetalleCategoriaComponent },
    { path: 'Categorias/crear', component: CrearCategoriaComponent },
    { path: 'Categorias/editar/:id', component: EditarCategoriaComponent },
    { path: 'Categorias/eliminar/:id', component: EliminarCategoriaComponent },

    { path: 'Personas/lista', component: PersonaListaComponent },
    { path: 'Personas/crear', component: PersonaCrearComponent },
    { path: 'Personas/editar/:id', component: PersonaEditarComponent },
    //{
    //    path: 'heroes',
    //    component: HeroListComponent,
    //    data: { title: 'Heroes List' }
    //},
    //{
    //    path: '',
    //    redirectTo: '/index.html',
    //    pathMatch: 'full'
    //},
    //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports:      [ BrowserModule, CategoriaModule, PersonaModule, RouterModule.forRoot(appRoutes) ],
    declarations: [ AppComponent, MenuComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }