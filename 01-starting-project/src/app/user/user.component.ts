import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

// this will give me a random number between 0 and the highest available index in the array.
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent { // this is how to draw a random user from the array of users.
  selectedUser = DUMMY_USERS[randomIndex];

  get imagePath() { // getter; method thats useable like a property (doesnt need to be called explicitly).
    return 'assets/users/' + this.selectedUser.avatar
  }
}
