import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { UserListComponent } from './user-list/user-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [UserFormComponent, UserListComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    MatRadioModule,
    MatCheckboxModule
  ],
  providers: [UserService]
})
export class UserModule { }
