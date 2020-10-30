import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  controllerUrl: string;

  constructor(private _http: HttpClient) {
    this.controllerUrl = "api/User";
  }

  /**
   * Method to get the list and details of the users available.
   */
  getUserList(): Observable<UserModel[]> {
    return this._http.get<UserModel[]>(`${this.controllerUrl}/get-all-users`);
  }

  /**
   * Method to get user based on given id.
   * @param id Id of the user for whom the data is to be fetched.
   */
  getUserById(id: number): Observable<UserModel> {
    return this._http.get<UserModel>(`${this.controllerUrl}/get-user/${id}`);
  }

  /**
   * Method to add the new user to the list.
   * @param userDetails UserModel object which is to be added to database.
   */
  addUser(userDetails: UserModel): Observable<boolean> {
    return this._http.post<boolean>(`${this.controllerUrl}`, userDetails);
  }

  /**
   * Method to edit any specific user.
   * @param userDetails UserModel object which is to be updated in the database.
   */
  editUser(userDetails: UserModel): Observable<boolean> {
    return this._http.put<boolean>(`${this.controllerUrl}/`, userDetails);
  }

  /**
   * Method to delete specific user from database.
   * @param id Id of the user whis is to be deleted from database.
   */
  deleteUser(id: number): Observable<boolean> {
    return this._http.delete<boolean>(`${this.controllerUrl}/${id}`);
  }
}
