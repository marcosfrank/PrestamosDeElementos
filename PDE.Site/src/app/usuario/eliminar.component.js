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
var usuario_1 = require("./usuario");
var app_service_1 = require("../app.service");
var UsuarioEliminarComponent = (function () {
    function UsuarioEliminarComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    UsuarioEliminarComponent.prototype.getUsuario = function (id) {
        var _this = this;
        this.service.getOne('Usuario', id)
            .then(function (usuario) { return _this.usuario = usuario; })
            .catch(function () { return alert('Error al consumir servicio'); });
    };
    UsuarioEliminarComponent.prototype.delete = function (usuario) {
        var _this = this;
        this.service.delete('Usuario', usuario.Id)
            .then(function () { return _this.router.navigate(['/Usuarios/lista']); })
            .catch(function () { return alert('Error al consumir servicio'); });
    };
    UsuarioEliminarComponent.prototype.ngOnInit = function () {
        this.usuario = new usuario_1.Usuario();
        var id = this.route.snapshot.paramMap.get('id');
        this.getUsuario(+id);
    };
    UsuarioEliminarComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            providers: [app_service_1.Service],
            templateUrl: './eliminar.component.html',
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, app_service_1.Service])
    ], UsuarioEliminarComponent);
    return UsuarioEliminarComponent;
}());
exports.UsuarioEliminarComponent = UsuarioEliminarComponent;
//# sourceMappingURL=eliminar.component.js.map