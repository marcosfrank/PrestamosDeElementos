import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { CommonModule }             from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListaCategoriasComponent } from './lista.component';
import { EditarCategoriaComponent } from './editar.component';
import { Service }                  from '../app.service';

@NgModule({
    imports: [CommonModule, BrowserModule, HttpModule, FormsModule, RouterModule ],
    declarations: [ ListaCategoriasComponent, EditarCategoriaComponent ],
    providers: [ Service ]
})
export class CategoriaModule { }