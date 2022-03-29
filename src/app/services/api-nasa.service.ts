import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiNasaService {
  private apiUrl = 'https://api.nasa.gov';
  private key = 'zdUP8ElJv1cehFM0rsZVSQN7uBVxlDnu4diHlLSb';

  constructor(private http: HttpClient) {}

  public getSimple(date: Date) {
    const url = `${this.apiUrl}/planetary/apod?api_key=${
      this.key
    }&date=${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    return this.http.get(url);
  }

  public getApodStartEnd(startDate: Date, endDate: Date) {
    const url = `${this.apiUrl}/planetary/apod?api_key=${this.key}&start_date=${startDate.getFullYear()}-${startDate.getMonth()+1}-${startDate.getDate()}&end_date=${endDate.getFullYear()}-${endDate.getMonth()+1}-${endDate.getDate()}`;
    return this.http.get(url);
  }
}
