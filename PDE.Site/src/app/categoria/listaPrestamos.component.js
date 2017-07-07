"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ListaPrestamosComponent = (function () {
    function ListaPrestamosComponent() {
        this.title = 'Listado de categorías';
    }
    ListaPrestamosComponent = __decorate([
        core_1.Component({
            selector: 'lista-prestamos',
            template: "<h2>List</h2>\n                <p><a href=\"Create\">Crear</a></p>\n                <table class=\"table\">\n                    <tr>\n                        <th>Descripcion</th>\n                        <th>Fecha de Creacion</th>\n                        <th></th>\n                    </tr>\n                    <tr *ngFor=\"let item of prestamos\">\n                        <td>{{ item.Descripcion }}</td>\n                        <td>{{ item.FechaCreacion }}</td>\n                        <td>\n                            <a [href]=\"'Update/' + item.Id\">Editar</a> |\n                            <a [href]=\"'Search/' + item.Id\">Detalles</a> |\n                            <a [href]=\"'Remove/' + item.Id\">Eliminar</a>\n                        </td>\n                    </tr>\n                </table>",
        })
    ], ListaPrestamosComponent);
    return ListaPrestamosComponent;
}());
exports.ListaPrestamosComponent = ListaPrestamosComponent;
//# sourceMappingURL=listaPrestamos.component.js.map