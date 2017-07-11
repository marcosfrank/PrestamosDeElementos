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
var categoria_1 = require("../categoria/categoria");
var elemento_1 = require("./elemento");
var app_service_1 = require("../app.service");
var ElementoEditarComponent = (function () {
    function ElementoEditarComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    ElementoEditarComponent.prototype.getElemento = function (id) {
        var _this = this;
        this.service.getOne('Elemento', id)
            .then(function (elemento) { return _this.elemento = elemento; })
            .catch(function () { return alert('Error al consumir servicio'); });
    };
    ElementoEditarComponent.prototype.getCategorias = function () {
        var _this = this;
        this.service.getAll('Categoria')
            .then(function (categorias) { return _this.categorias = categorias; })
            .catch(function () { return alert('Error al consumir servicio'); });
    };
    ElementoEditarComponent.prototype.save = function (elemento) {
        var _this = this;
        this.service.update('Elemento', elemento)
            .then(function (elemento) {
            _this.elemento = elemento;
            _this.router.navigate(['/Elementos/lista']);
        })
            .catch(function () { return alert('Error al consumir servicio'); });
    };
    ElementoEditarComponent.prototype.ngOnInit = function () {
        this.title = 'Editar';
        this.getCategorias();
        this.elemento = new elemento_1.Elemento();
        this.elemento.Categoria = new categoria_1.Categoria();
        var id = this.route.snapshot.paramMap.get('id');
        this.getElemento(+id);
    };
    ElementoEditarComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            providers: [app_service_1.Service],
            templateUrl: './editar.component.html',
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, app_service_1.Service])
    ], ElementoEditarComponent);
    return ElementoEditarComponent;
}());
exports.ElementoEditarComponent = ElementoEditarComponent;
//# sourceMappingURL=editar.component.js.map