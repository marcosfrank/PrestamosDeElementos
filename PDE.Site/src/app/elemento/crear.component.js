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
var ElementoCrearComponent = (function () {
    function ElementoCrearComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    ElementoCrearComponent.prototype.getCategorias = function () {
        var _this = this;
        this.service.getAll('Categoria')
            .then(function (categorias) { return _this.categorias = categorias; })
            .catch(function () { return alert('Error al consumir servicio'); });
    };
    ElementoCrearComponent.prototype.save = function (elemento) {
        var _this = this;
        this.service.add('Elemento', elemento)
            .then(function (elemento) {
            _this.elemento = elemento;
            _this.router.navigate(['/Elementos/lista']);
        })
            .catch(function () { return alert('Error al consumir servicio'); });
    };
    ElementoCrearComponent.prototype.ngOnInit = function () {
        this.getCategorias();
        this.elemento = new elemento_1.Elemento();
        this.elemento.Categoria = new categoria_1.Categoria();
        this.title = 'Crear';
    };
    ElementoCrearComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            providers: [app_service_1.Service],
            templateUrl: './editar.component.html',
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, app_service_1.Service])
    ], ElementoCrearComponent);
    return ElementoCrearComponent;
}());
exports.ElementoCrearComponent = ElementoCrearComponent;
//# sourceMappingURL=crear.component.js.map