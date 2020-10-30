import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { UserModel, Gender, Hobby } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnChanges {

  user: UserModel;
  userList: UserModel[];
  isUserAvailable: boolean;
  gender: typeof Gender;
  hobby: typeof Hobby;

  @Input('isSuccess') isSuccess: string;
  @Output() isFetched: EventEmitter<UserModel>;

  constructor(private _userService: UserService) {
    this.user = new UserModel();
    this.userList = [];
    this.isUserAvailable = false;
    this.gender = Gender;
    this.hobby = Hobby;
    this.isFetched = new EventEmitter<UserModel>();
  }

  ngOnInit() {
    this.getAllUserDetails();
  }

  ngOnChanges(): void {
    if (this.isSuccess) {
      this.getAllUserDetails();
    }
  }

  /**
   * Method to get the list and details of the users available.
   */
  getAllUserDetails(): void {
    this._userService.getUserList().subscribe(
      res => {
        this.userList = res;
        this.isUserAvailable = this.userList.length > 0;
      },
      error => {
        console.log(error);
      });
  }

  /**
   * Method to get user based on given id.
   * @param id Id of the user for whom the data is to be fetched.
   */
  getUserById(id: number): void {
    this._userService.getUserById(id).subscribe(
      res => {
        this.user = res;
        this.isFetched.emit(this.user);
      },
      error => {
        console.log(error);
      })
  }

  /**
   * Method to delete specific user from database.
   * @param id Id of the user whis is to be deleted from database.
   */
  deleteUser(id: number): void {
    this._userService.deleteUser(id).subscribe(
      res => {
        if (res) {
          this.getAllUserDetails();
        }
      },
      error => {
        console.log(error);
      });
  }
}
