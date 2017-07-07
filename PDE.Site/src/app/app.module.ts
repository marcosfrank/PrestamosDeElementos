import { NgModule }        from '@angular/core';
import { BrowserModule }   from '@angular/platform-browser';
import { CategoriaModule } from './categoria/categoria.module';
import { AppComponent }    from './app.component';

@NgModule({
    imports:      [ BrowserModule, CategoriaModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }