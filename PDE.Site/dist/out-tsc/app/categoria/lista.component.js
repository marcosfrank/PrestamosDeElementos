"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_service_1 = require("../app.service");
var ListaCategoriasComponent = (function () {
    function ListaCategoriasComponent(categoriaService) {
        this.categoriaService = categoriaService;
    }
    ListaCategoriasComponent.prototype.getCategorias = function () {
        var _this = this;
        this.categoriaService.getAll('Categoria')
            .then(function (categorias) { return _this.categorias = categorias; })
            .catch(function () { return alert('Error al consumir servicio'); });
    };
    ListaCategoriasComponent.prototype.ngOnInit = function () {
        this.getCategorias();
    };
    ListaCategoriasComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            providers: [app_service_1.Service],
            template: "<h2>Listado de categor&iacute;as</h2>\n        <p><a href=\"Create\">Crear</a></p>\n        <table class=\"table\">\n            <tr>\n                <th>Descripcion</th>\n                <th>Fecha de Creacion</th>\n                <th></th>\n            </tr>\n            <tr *ngFor=\"let item of categorias\">\n                <td>{{ item.Descripcion }}</td>\n                <td>{{ item.FechaCreacion | date: 'dd/MM/yyyy' }}</td>\n                <td>\n                    <a [href]=\"'Update/' + item.Id\">Editar</a> |\n                    <a [href]=\"'Search/' + item.Id\">Detalles</a> |\n                    <a [href]=\"'Remove/' + item.Id\">Eliminar</a>\n                </td>\n            </tr>\n        </table>",
        }),
        __metadata("design:paramtypes", [app_service_1.Service])
    ], ListaCategoriasComponent);
    return ListaCategoriasComponent;
}());
exports.ListaCategoriasComponent = ListaCategoriasComponent;
//# sourceMappingURL=lista.component.js.map