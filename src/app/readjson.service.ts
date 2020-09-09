import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ReadjsonService {
  constructor(private httpClient: HttpClient) {}
  getJsonData() {
    return this.httpClient.get('/assets/SampleData.json');
  }
}
