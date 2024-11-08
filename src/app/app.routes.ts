import { Routes } from '@angular/router';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
   /* { path: 'auth/callback', component: AuthCallbackComponent }, */
   { path:"login", component:LoginComponent}
    
];
