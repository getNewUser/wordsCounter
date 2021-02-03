import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FileDownloadUpload } from '../services/fileDownloadUpload.service';
import { saveAs } from 'file-saver';
import { IUploadResponse } from '../models/uploadResponse.model'
import { Buffer } from 'buffer';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  SERVER_URL = "http://localhost:8080/file";
  uploadForm: FormGroup;
  pairs: IUploadResponse;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private fileDownloadUpload: FileDownloadUpload) { }
  

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      files: ['']
    });
  }

  onFileSelect(event) {
    if(event.target.files.length > 0){
      const files = event.target.files;
      this.uploadForm.get('files').setValue(files);
    }
  }

  onSubmit() {
    const formData = new FormData();
    const files = this.uploadForm.get('files').value
    for(let i = 0; i < files.length; i++){
      formData.append('file[]',files[i]);
    }
    this.fileDownloadUpload.uploadFiles(formData).subscribe(
      data => this.pairs = data,
      err => this.errorMessage = err.error
    );     
  }

  getFile(item){
    this.fileDownloadUpload.getFile(item.id).subscribe(data => 
        this.saveFile(data.file.data, item.intervalName.substring(1, item.intervalName.length))
      );

  }

  saveFile(data, intervalName: string){
    let buff = Buffer.from(data, 'base64');
    let text  = (buff.toString('ascii'));
    let blob = new Blob([text], {type: "text/plain;charset=utf-8"});
    saveAs.saveAs(blob, intervalName + ' text.txt');
  }
}
