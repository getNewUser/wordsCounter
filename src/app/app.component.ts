import { Component } from '@angular/core';
import { FileDownloadUpload } from './services/fileDownloadUpload.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  constructor(private downloaderService: FileDownloadUpload){}
}
