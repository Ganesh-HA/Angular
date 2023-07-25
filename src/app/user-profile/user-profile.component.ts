import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  userName: string = 'Ganesh HA';
  userAge: number = 22;
  userEmail: string = 'haganesh2000@gmail.com';

  change(): void {
    this.userName = 'Gattu';
    this.userAge = 20;
    this.userEmail = 'ganeshha2000@gmail.com';
  }
  // changeAge(): void {
  //   this.userAge = 20;
  // }
  // changeEmail(): void {
  //   this.userEmail = 'ganeshha2000@gmail.com';
  // }
}