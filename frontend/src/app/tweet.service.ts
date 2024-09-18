import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TweetService {
    private baseUrl = 'http://localhost:3000/posts';

    constructor(private http: HttpClient) { }

    getAllPosts(): Observable<any> {
        return this.http.get(this.baseUrl);
    }

    createPost(user: string, content: string): Observable<any> {
        return this.http.post(this.baseUrl + '/create', { user, content });
    }
}
