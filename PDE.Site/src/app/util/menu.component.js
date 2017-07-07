"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MenuComponent = (function () {
    function MenuComponent() {
        this.modulos = ['Categorias', 'Elementos', 'Personas', 'Usuarios', 'Prestamos'];
    }
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'menu',
            template: "<div>\n        <ul>\n            <li *ngFor=\"let modulo in modulos\">\n                {{ modulo }}\n                <ul>\n                    <li><a (click)=\"\">Nuevo</a></li>\n                    <li><a (click)=\"\">Editar</a></li>\n                    <li><a (click)=\"\">Eliminar</a></li>\n                    <li><a (click)=\"\">Listado</a></li>\n                </ul>\n            </li>\n        </ul>\n    </div>",
        })
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map