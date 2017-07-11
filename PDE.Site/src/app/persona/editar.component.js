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
var persona_1 = require("./persona");
var app_service_1 = require("../app.service");
var PersonaEditarComponent = (function () {
    function PersonaEditarComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    PersonaEditarComponent.prototype.getPersona = function (id) {
        var _this = this;
        this.service.getOne('Persona', id)
            .then(function (persona) { return _this.persona = persona; })
            .catch(function () { return alert('Error al consumir servicio'); });
    };
    PersonaEditarComponent.prototype.save = function (persona) {
        var _this = this;
        this.service.update('Persona', persona)
            .then(function (persona) {
            _this.persona = persona;
            _this.router.navigate(['/Personas/lista']);
        })
            .catch(function () { return alert('Error al consumir servicio'); });
    };
    PersonaEditarComponent.prototype.ngOnInit = function () {
        this.title = 'Editar';
        this.persona = new persona_1.Persona();
        var id = this.route.snapshot.paramMap.get('id');
        this.getPersona(+id);
    };
    PersonaEditarComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            providers: [app_service_1.Service],
            templateUrl: './editar.component.html',
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, app_service_1.Service])
    ], PersonaEditarComponent);
    return PersonaEditarComponent;
}());
exports.PersonaEditarComponent = PersonaEditarComponent;
//# sourceMappingURL=editar.component.js.map