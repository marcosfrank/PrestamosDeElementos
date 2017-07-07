import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { CommonModule }             from '@angular/common';
import { HttpModule }               from '@angular/http';
import { ListaCategoriasComponent } from './lista.component';
import { Service }                  from '../app.service';

@NgModule({
    imports: [CommonModule, BrowserModule, HttpModule ],
    declarations: [ ListaCategoriasComponent ],
    providers: [ Service ],
    bootstrap: [ ListaCategoriasComponent ]
})
export class CategoriaModule { }