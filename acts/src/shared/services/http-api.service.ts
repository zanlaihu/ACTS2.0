import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HttpApiService {
  constructor(private http: HttpClient) {}

  /**
   * pose
   *
   * @template T
   * @param {string} url
   * @param {object} data
   * @return {*}  {Observable<T>}
   * @memberof HttpApiService
   */
  // public post<T>(url: string, data: object): Observable<T> {
  //   return this.http.post(url, data).pipe(
  //     map((res) => this.handleResponse(res)),
  //     catchError((error) => this.handleError(error))
  //   );
  // }

  /**
   * handleResponse
   *
   * @private
   * @param {*} res
   * @return {*}  {*}
   * @memberof HttpApiService
   */
  // private handleResponse(res:any):any{
  //   if(res.body[ResponseBody.status]===ResponseStatus.success){
  //     return res.body[ResponseBody.result];
  //   }
  //   throw new Error(CommonError.systemError);
  // }

  // private handleError(error:any):Observable<never>{

  // }
}
