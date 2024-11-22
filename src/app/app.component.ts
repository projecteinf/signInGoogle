import { SocialUser, SocialAuthService, GoogleLoginProvider, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment.development';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { }

//   loginForm!: FormGroup;
//   socialUser!: SocialUser;

//   isLoggedin?: boolean;

//   constructor(

//     private formBuilder: FormBuilder,

//     private socialAuthService: SocialAuthService

//   ) {}

//   ngOnInit() {
//     console.log(environment.google.client_id);
//     this.loginForm = this.formBuilder.group({
      
//       email: ['', Validators.required],

//       password: ['', Validators.required],

//     });

//     this.socialAuthService.authState.subscribe((user) => {

//       this.socialUser = user;

//       this.isLoggedin = user != null;

//       console.log(this.socialUser);

//     });

//   }

//   loginWithGoogle(): void {
//     this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
//   }

//   logOut(): void {

//     this.socialAuthService.signOut();

//   }

// /*
// https://accounts.google.com/gsi/status?client_id=995932875047-590au332rpct3p1dsud2udhgscdjtsb3.apps.googleusercontent.com&as=6049pqRZcgh5MEBlAoqN3A&has_opted_out_fedcm=false
// https://accounts.google.com/o/oauth2/auth?client_id=995932875047-590au332rpct3p1dsud2udhgscdjtsb3.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fauth%2Fcallback&response_type=code&scope=email&access_type=offline
// */
// }


