import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { of } from 'rxjs';

@Component({
  selector: 'app-ngselect',
  imports: [FormsModule,CommonModule, NgSelectModule,NgFor],
  templateUrl: './ngselect.component.html',
  styleUrl: './ngselect.component.scss'
})
export class NgselectComponent {
  githubUsers$ = of([
    { login: 'john_doe', avatar_url: 'boy.png' },
    { login: 'jane_smith', avatar_url: 'boy2.jpeg' },
    { login: 'mark_twain', avatar_url: 'gamer.png' },
    { login: 'alice_wonder', avatar_url: 'girl.png' },
    { login: 'bob_builder', avatar_url: 'woman.png' },
  ]);

  selectedUsers: any[] = []; // Selected users

  // Clear user from the selected list
  clearUser(user?: any): void {
    if(user){
      this.selectedUsers = this.selectedUsers.filter(u => u !== user);
    }else{
      this.selectedUser = null;
    }
  }


  selectedUser: any = null; // Single selected user

  people$ = of([
    { name: 'john_doe', avatar_url: 'boy.png' },
    { name: 'jane_smith', avatar_url: 'boy2.jpeg' },
    { name: 'mark_twain', avatar_url: 'gamer.png' },
    { name: 'alice_wonder', avatar_url: 'girl.png' },
    { name: 'bob_builder', avatar_url: 'woman.png' },
  ]);

  selectedPeople:any = [];


	clearModel() {
		this.selectedPeople = [];
	}
}
