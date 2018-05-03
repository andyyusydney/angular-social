import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { IUser } from '../user.interface';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(numOfUsers: number): Observable<IUser[]> {
    //return of(USER_DATA);
    return this.http.get<IUser[]>(`https://randomapi.com/api/oexjr1su?key=HRLP-2YIK-SUYS-ORDK&results=${numOfUsers}&fmt=json`)
      .pipe(
        map((response:any) => response.results),
        catchError(this.handleError('getUsers', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  };

}