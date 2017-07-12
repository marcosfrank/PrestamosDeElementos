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
var UsuarioListaComponent = (function () {
    function UsuarioListaComponent(service) {
        this.service = service;
    }
    UsuarioListaComponent.prototype.getUsuarios = function () {
        var _this = this;
        this.service.getAll('Usuario')
            .then(function (usuarios) { return _this.usuarios = usuarios; })
            .catch(function () { return alert('Error al consumir servicio'); });
    };
    UsuarioListaComponent.prototype.ngOnInit = function () {
        this.getUsuarios();
    };
    UsuarioListaComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            providers: [app_service_1.Service],
            templateUrl: './lista.component.html',
        }),
        __metadata("design:paramtypes", [app_service_1.Service])
    ], UsuarioListaComponent);
    return UsuarioListaComponent;
}());
exports.UsuarioListaComponent = UsuarioListaComponent;
//# sourceMappingURL=lista.component.js.map