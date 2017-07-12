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
var UsuarioEditarComponent = (function () {
    function UsuarioEditarComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    UsuarioEditarComponent.prototype.getUsuario = function (id) {
        var _this = this;
        this.service.getOne('Usuario', id)
            .then(function (usuario) { return _this.usuario = usuario; })
            .catch(function () { return alert('Error al consumir servicio'); });
    };
    UsuarioEditarComponent.prototype.save = function (usuario) {
        var _this = this;
        this.service.update('Usuario', usuario)
            .then(function (usuario) {
            _this.usuario = usuario;
            _this.router.navigate(['/Usuarios/lista']);
        })
            .catch(function () { return alert('Error al consumir servicio'); });
    };
    UsuarioEditarComponent.prototype.ngOnInit = function () {
        this.title = 'Editar';
        this.usuario = new usuario_1.Usuario();
        var id = this.route.snapshot.paramMap.get('id');
        this.getUsuario(+id);
    };
    UsuarioEditarComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            providers: [app_service_1.Service],
            templateUrl: './editar.component.html',
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, app_service_1.Service])
    ], UsuarioEditarComponent);
    return UsuarioEditarComponent;
}());
exports.UsuarioEditarComponent = UsuarioEditarComponent;
//# sourceMappingURL=editar.component.js.map