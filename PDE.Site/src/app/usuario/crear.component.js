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
var UsuarioCrearComponent = (function () {
    function UsuarioCrearComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    UsuarioCrearComponent.prototype.save = function (usuario) {
        var _this = this;
        this.service.add('Usuario', usuario)
            .then(function (usuario) {
            _this.usuario = usuario;
            _this.router.navigate(['/Usuarios/lista']);
        })
            .catch(function () { return alert('Error al consumir servicio'); });
    };
    UsuarioCrearComponent.prototype.ngOnInit = function () {
        this.usuario = new usuario_1.Usuario();
        this.title = 'Crear';
    };
    UsuarioCrearComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            providers: [app_service_1.Service],
            templateUrl: './editar.component.html',
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, app_service_1.Service])
    ], UsuarioCrearComponent);
    return UsuarioCrearComponent;
}());
exports.UsuarioCrearComponent = UsuarioCrearComponent;
//# sourceMappingURL=crear.component.js.map