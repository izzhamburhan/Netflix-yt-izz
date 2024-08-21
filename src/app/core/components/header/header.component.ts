import { CommonModule } from '@angular/common';
import { Component, Inject, Input, inject } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
  @Input({required: true}) userImg: string = '';
  navList = ["Home", "TV Shows", "News & Popular", "My Lists", "Browse by Languages"]
  auth = inject(AuthService);

  signOut() {
    sessionStorage.removeItem("LoggedInUser"); // remove the user from the session
    this.auth.signOut();
  }
}
