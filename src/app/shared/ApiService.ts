import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {ProjectDTO} from '../model/projectDTO';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  baseUrl = environment.apiUrl;

  getProjectList(): Observable<ProjectDTO[]> {
    return this.http.get<ProjectDTO[]>(this.baseUrl + '/api/getProjects');
  }

  uploadFile(fileToUpload: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.http.post(this.baseUrl + '/api/upload', formData);
  }
}
