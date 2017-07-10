import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { RouterModule, Routes }     from '@angular/router';
import { AppComponent }             from './app.component';
import { MenuComponent }            from './util/menu.component';
import { CategoriaModule }          from './categoria/categoria.module';
import { ListaCategoriasComponent } from './categoria/lista.component';
import { EditarCategoriaComponent } from './categoria/editar.component';
import { CrearCategoriaComponent }  from './categoria/crear.component';

const appRoutes: Routes = [
    { path: 'Categorias/lista', component: ListaCategoriasComponent },
    //{ path: ':modulo/detalles/:id', component: DetalleCategoriaComponent },
    { path: 'Categorias/crear', component: CrearCategoriaComponent },
    { path: 'Categorias/editar/:id', component: EditarCategoriaComponent },
    //{ path: ':modulo/eliminar/:id', component: EliminarCategoriaComponent },
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
    imports: [BrowserModule, CategoriaModule, RouterModule.forRoot(appRoutes) ],
    declarations: [ AppComponent, MenuComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }