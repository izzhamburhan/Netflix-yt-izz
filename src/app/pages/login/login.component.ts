declare var google:any;
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  private router = inject(Router);
  ngOnInit() {
    google.accounts.id.initialize({
      client_id: '908379805135-t0vgn7c1olfovrjprt7o80hu2a9ii6di.apps.googleusercontent.com',
      callback: (resp: any)=> {
        this.handleLogin(resp);
      }
    });

    google.accounts.id.renderButton(document.getElementById("google-btn"), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      type: 'standard',
      text: 'Sign in with Google'
    })
  }

  private decodeToken(token: string) {
    return JSON.parse(atob(token.split('.')[1]))
  }

  handleLogin(response: any) {
    if(response) {
      //decode the token
      const payLoad = this.decodeToken(response.credential)
      //store in session
      sessionStorage.setItem('LoggedInUser', JSON.stringify(payLoad));
      //navigate to home/browse
      this.router.navigate(['browse']);
    }else{
      console.log('Login failed');
    }
  }
}
