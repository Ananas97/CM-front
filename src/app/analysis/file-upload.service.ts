import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private httpClient: HttpClient) { }

  postFile(fileToUpload: File): Observable<object> {
    const endpoint = 'your-destination-url'; // TODO SO
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.httpClient
      .post(endpoint, formData); // , { headers: yourHeadersConfig })
      // .map(() => { return true; })
      // .catch((e) => this.handleError(e));
  }
}
