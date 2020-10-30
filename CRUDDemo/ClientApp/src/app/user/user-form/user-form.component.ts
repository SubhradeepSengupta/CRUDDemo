import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../user.service';
import { UserModel, Hobby, Gender } from '../user.model';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  keys = Object.keys;
  isANumber = value => isNaN(Number(value)) === true;
  hobby: typeof Hobby;
  gender: typeof Gender;
  user: UserModel;
  isEdit: boolean;
  isSuccess: boolean;
  isMatched: boolean;

  constructor(private _userService: UserService) {
    this.user = new UserModel();
    this.hobby = Hobby;
    this.gender = Gender;
    this.isEdit = false;
    this.isSuccess = false;
    this.isMatched = false;
  }

  ngOnInit() {
    this.user.hobby = Hobby.Cricket;
  }

  /**
   * Enum to array conversion.
   * @param enums Enum object which is to be converted.
   */
  toArray(enums: Hobby) {
    return Object.keys(enums)
      .filter(this.isANumber)
      .map(key => enums[key]);
  }

  /**
   * Adds or edit user based on isEdit flag.
   * @param isEdit Boolean to check whether the operation is of add or edit.
   */
  addEditUser(form: NgForm): void {
    this.isSuccess = false;
    if (!this.isEdit) {
      this._userService.addUser(this.user).subscribe(
        res => {
          if (res) {
            this.isSuccess = true;
            this.clearInputs(form);
          }
        },
        error => {
          console.log(error);
        });
    }
    else {
      this._userService.editUser(this.user).subscribe(
        res => {
          if (res) {
            this.isSuccess = true;
            this.clearInputs(form);
          }
        },
        error => {
          console.log(error);
        })
    }
  }

  /**
   * Method which will set the user emitted from list component.
   */
  isUserFetched(user: UserModel) {
    this.user = user;
    this.isEdit = true;
  }

  /**
   * Method to validate password and confirm password.
   */
  matchPassword(): void {
    if (this.user.password && this.user.confirmPassword && this.user.password.toLowerCase().trim() === this.user.confirmPassword.toLowerCase().trim()) {
      this.isMatched = true;
    }
    else {
      this.isMatched = false;
    }
  }

  /**
   * Method to clear out form fieds.
   */
  clearInputs(form?: NgForm): void {
    if (form && form !== null) {
      form.reset(form.value);
    }
    this.user = new UserModel();
  }
}
