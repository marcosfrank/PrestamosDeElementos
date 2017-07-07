import { Injectable } from '@angular/core';
import { Headers, Http, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class Service<T> {
    constructor(private http: Http) { }

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private baseUrl = '../api/';

    getAll(url: string): Promise<T[]> {
        return this.http.request(new Request({
            method: RequestMethod.Get,
            url: this.baseUrl + url
        })).toPromise()
            .then(response => response.json() as T[])
            .catch(this.handleError);
    }

    getOne(url: string, id: number): Promise<T> {
        return this.http.request(new Request({
            method: RequestMethod.Get,
            url: this.baseUrl + url
        })).toPromise()
            .then(response => response.json() as T)
            .catch(this.handleError);
    }

    add(url: string, entity: T): Promise<T> {
        return this.http.request(new Request({
            method: RequestMethod.Post,
            url: this.baseUrl + url,
            body: JSON.stringify(entity),
            headers: this.headers
        })).toPromise()
            .then(response => response.json() as T)
            .catch(this.handleError);
    }

    update(url: string, entity: T): Promise<T> {
        return this.http.request(new Request({
            method: RequestMethod.Put,
            url: this.baseUrl + url,
            body: JSON.stringify(entity),
            headers: this.headers
        })).toPromise()
            .then(() => entity)
            .catch(this.handleError);
    }

    delete(url: string, id: number): Promise<void> {
        return this.http.request(new Request({
            method: RequestMethod.Delete,
            url: this.baseUrl + url,
            headers: this.headers
        })).toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    call(request: Request): Promise<any> {
        return this.http.request(request)
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}