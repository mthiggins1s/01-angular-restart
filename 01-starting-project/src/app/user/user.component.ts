import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 @Input({required: true}) avatar!: string;
 @Input({required: true}) name!: string;
 @Input({required: true}) id!: string;
 // for @Output(), the select property will recieve an initial value.
 @Output() select = new EventEmitter();


  get imagePath() {
    return 'assets/users/' + this.avatar
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}
