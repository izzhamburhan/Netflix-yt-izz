import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { HeaderComponent } from '../../core/components/header/header.component';
import { BannerComponent } from '../../core/components/banner/banner.component';
import { MovieService } from '../../shared/services/movie.service';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [HeaderComponent, BannerComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent implements OnInit {
  
  auth = inject(AuthService);
  movieService = inject(MovieService);
  name = JSON.parse(sessionStorage.getItem('LoggedInUser')!).name;
  userProfileImg = JSON.parse(sessionStorage.getItem('LoggedInUser')!).picture;
  given_name = JSON.parse(sessionStorage.getItem('LoggedInUser')!).given_name;
  email = JSON.parse(sessionStorage.getItem('LoggedInUser')!).email;

  ngOnInit(): void {
    this.movieService.getMovies()
    .subscribe(res=>{
      console.log(res);
    })
  }

  signOut() {
    sessionStorage.removeItem("LoggedInUser"); // remove the user from the session
    this.auth.signOut();
  }
  
}
