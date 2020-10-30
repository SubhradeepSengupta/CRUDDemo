export class UserModel {
  userId: number;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  hobby: Hobby;
  dateOfBirth: Date;
  gender: Gender;
  status: boolean;

  constructor() {
    this.dateOfBirth = new Date();
    this.hobby = Hobby.Cricket;
    this.gender = Gender.Male;
  }
}

export enum Gender {
  Male,
  Female
}

export enum Hobby {
  Cricket,
  Football,
  Basketball
}
