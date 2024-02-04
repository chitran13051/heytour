import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { AgencyComponent } from './agency/agency.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact',
  },
  {
    path: 'blog',
    component: BlogComponent,
    title: 'Blog',
  },
  {
    path: 'agency',
    component: AgencyComponent,
    title: 'Agency',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'My Account',
  },
];
