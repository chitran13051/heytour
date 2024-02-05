import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule,
    MatMenuModule,
    RouterModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  account = { label: 'My Account', logo: 'person' };
  accountLinks = [
    { route: 'contact', label: 'Hilfe & Kontakt', logo: 'local_phone' },
    { route: 'newsletter', label: 'Newsletter', logo: 'mail' },
    { route: 'agency', label: 'Reisebüro', logo: 'pin_drop' },
    { route: 'favorite', label: 'Merkzettel', logo: 'favorite_border' },
    { route: 'blog', label: 'Blog', logo: 'beach_access' },
  ];
}
