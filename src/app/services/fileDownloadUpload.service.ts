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
        return this.http.post<IUploadResponse>('http://localhost:8080/file', formData);
    }

    getFile(id: string) {
        return this.http.get<any>('http://localhost:8080/file?id=' + id);
    }
}


