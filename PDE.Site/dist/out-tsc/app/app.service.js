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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var Service = (function () {
    function Service(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.baseUrl = '../api/';
    }
    Service.prototype.getAll = function (url) {
        return this.http.request(new http_1.Request({
            method: http_1.RequestMethod.Get,
            url: this.baseUrl + url
        })).toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    Service.prototype.getOne = function (url, id) {
        return this.http.request(new http_1.Request({
            method: http_1.RequestMethod.Get,
            url: this.baseUrl + url + '/' + id
        })).toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    Service.prototype.add = function (url, entity) {
        return this.http.request(new http_1.Request({
            method: http_1.RequestMethod.Post,
            url: this.baseUrl + url,
            body: JSON.stringify(entity),
            headers: this.headers
        })).toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    Service.prototype.update = function (url, entity) {
        return this.http.request(new http_1.Request({
            method: http_1.RequestMethod.Put,
            url: this.baseUrl + url,
            body: JSON.stringify(entity),
            headers: this.headers
        })).toPromise()
            .then(function () { return entity; })
            .catch(this.handleError);
    };
    Service.prototype.delete = function (url, id) {
        return this.http.request(new http_1.Request({
            method: http_1.RequestMethod.Delete,
            url: this.baseUrl + url,
            headers: this.headers
        })).toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    Service.prototype.call = function (request) {
        return this.http.request(request)
            .toPromise()
            .catch(this.handleError);
    };
    Service.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    Service = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], Service);
    return Service;
}());
exports.Service = Service;
//# sourceMappingURL=app.service.js.map