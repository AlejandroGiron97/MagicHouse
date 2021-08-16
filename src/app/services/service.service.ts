import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student.model';
import { House } from '../models/house.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
/**
 * constructor with variable injected parameter of type HttpClient
 */
  constructor(private http: HttpClient) { }

/**
 * method in which a URL is received to consume the service
 */
  public get<Student>(url:string): any{

    return this.http.get<Student>(url);
  }

}
