import { Component } from '@angular/core';
import { MenuComponent } from './util/menu.component';

@Component({
    selector: 'my-app',
    template: `<h2>{{name}}</h2>
    <menu></menu>`,
})
export class AppComponent {
    name = 'Index';
}