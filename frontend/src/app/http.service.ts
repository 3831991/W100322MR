import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { UtilityService } from './utility.service';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private readonly url = 'http://localhost:3000';
    private readonly options = { withCredentials: true };

    get<T>(route: string) {
        this.utility.loader(true);

        return this.httpClient.get<T>(`${this.url}/${route}`, this.options).pipe(finalize(() => {
            this.utility.loader(false);
        }));
    }

    post<T>(route: string, body: any) {
        this.utility.loader(true);

        return this.httpClient.post<T>(`${this.url}/${route}`, body, this.options).pipe(finalize(() => {
            this.utility.loader(false);
        }));
    }

    put<T>(route: string, body: any) {
        this.utility.loader(true);

        return this.httpClient.put<T>(`${this.url}/${route}`, body, this.options).pipe(finalize(() => {
            this.utility.loader(false);
        }));
    }

    delete<T>(route: string) {
        this.utility.loader(true);

        return this.httpClient.delete<T>(`${this.url}/${route}`, this.options).pipe(finalize(() => {
            this.utility.loader(false);
        }));
    }

    constructor(private httpClient: HttpClient, private utility: UtilityService) { }
}
