import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUploadResponse } from '../models/uploadResponse.model'

@Injectable({
    providedIn: 'root'
})
export class FileDownloadUpload {
    constructor(private http: HttpClient){}

    uploadFiles(formData): Observable<IUploadResponse> {
        return this.http.post<IUploadResponse>('https://word-counter-server.herokuapp.com/file', formData);
    }

    getFile(id: string) {
        return this.http.get<any>('https://word-counter-server.herokuapp.com/file?id=' + id);
    }
}


