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
var router_1 = require("@angular/router");
var categoria_1 = require("./categoria");
var app_service_1 = require("../app.service");
var EliminarCategoriaComponent = (function () {
    function EliminarCategoriaComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    EliminarCategoriaComponent.prototype.getCategoria = function (id) {
        var _this = this;
        this.service.getOne('Categoria', id)
            .then(function (categoria) { return _this.categoria = categoria; })
            .catch(function () { return alert('Error al consumir servicio'); });
    };
    EliminarCategoriaComponent.prototype.delete = function (categoria) {
        var _this = this;
        this.service.delete('Categoria', categoria.Id)
            .then(function () { return _this.router.navigate(['/Categorias/lista']); })
            .catch(function () { return alert('Error al consumir servicio'); });
    };
    EliminarCategoriaComponent.prototype.ngOnInit = function () {
        this.categoria = new categoria_1.Categoria();
        var id = this.route.snapshot.paramMap.get('id');
        this.getCategoria(+id);
    };
    EliminarCategoriaComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            providers: [app_service_1.Service],
            templateUrl: './eliminar.component.html',
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, app_service_1.Service])
    ], EliminarCategoriaComponent);
    return EliminarCategoriaComponent;
}());
exports.EliminarCategoriaComponent = EliminarCategoriaComponent;
//# sourceMappingURL=eliminar.component.js.map