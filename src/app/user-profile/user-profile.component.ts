import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  @ViewChild('inputField') inputField?: ElementRef;
  userName: string = 'Ganesh H A';
  userAge: number = 22;
  userEmail: string = 'ganesh@gmail.com';
  flagName: boolean=false;
  flagAge: boolean=false;
  flagEmail: boolean=false;
  changeName(): void {
    this.userName = '';
    if (this.inputField?.nativeElement) {
      this.inputField.nativeElement.focus();
    }
  }
  onName(){
   if (!this.userName) {
      this.userName='';
      this.flagName=true;
   }
   else {
      this.flagName=false;
   }
  }
  onAge(){
   if (!this.userAge) {
      this.userAge=0;
      this.flagAge=true;
   }
   else {
      this.flagAge=false;
   }
  }
  onChange(){
   if (!this.userEmail.endsWith('@gmail.com')) {
      this.userEmail='';
      this.flagEmail=true;
   }
   else {
      this.flagEmail=false;
   }
  }
}