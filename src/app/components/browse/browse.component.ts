import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent {
  auth = inject(AuthService);
  name = JSON.parse(sessionStorage.getItem('LoggedInUser')!).name;
  userProfileImg = JSON.parse(sessionStorage.getItem('LoggedInUser')!).picture;
  given_name = JSON.parse(sessionStorage.getItem('LoggedInUser')!).given_name;
  email = JSON.parse(sessionStorage.getItem('LoggedInUser')!).email;

  signOut() {
    sessionStorage.removeItem("LoggedInUser"); // remove the user from the session
    this.auth.signOut();
  }
  
}
