export interface IUserData {
  id: string;
  name: string;
  surname: string;
  currentWork: string;
  regDate: Date;
  login: string;
  password: string;
}
export class UserDataClass {
  id: string = undefined;
  name: string = "";
  surname: string = "";
  currentWork: string = "";
  regDate: Date = new Date();
  login: string = "hello";
  password: string = "123";
  constructor(data: IUserData) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.surname = data.surname;
      this.currentWork = data.currentWork;
      this.regDate = data.regDate;
      this.login = data.login;
      this.password = data.password;
    }
  }
  auth(login: string, password: string) {
    const users = [
      {
        id: "1",
        name: "John Doe",
        surname: "Doe",
        currentWork: "Software Engineer",
        regDate: new Date(),
        login: "johndoe",
        password: "123456",
      },
    ];

    for (const user of users) {
      if (user.login === login && user.password === password) {
        return user;
      }
    }

    return null;
  }
  
}
