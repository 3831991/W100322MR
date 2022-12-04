import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private readonly url = environment.url;
    private readonly options = { withCredentials: true };

    get<T>(route: string) {
        return this.httpClient.get<T>(`${this.url}/${route}`, this.options);
    }

    post<T>(route: string, body: any) {
        return this.httpClient.post<T>(`${this.url}/${route}`, body, this.options);
    }

    put<T>(route: string, body: any) {
        return this.httpClient.put<T>(`${this.url}/${route}`, body, this.options);
    }

    delete<T>(route: string) {
        return this.httpClient.delete<T>(`${this.url}/${route}`, this.options);
    }

    constructor(private httpClient: HttpClient) { }
}
