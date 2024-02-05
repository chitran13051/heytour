import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgFor,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatIconButton,
    MatIconModule,
    RouterModule,
    LoginComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  headerLinks = [
    { route: 'contact', label: 'Hilfe & Kontakt', logo: 'local_phone' },
    { route: 'newsletter', label: 'Newsletter', logo: 'mail' },
    { route: 'agency', label: 'Reisebüro', logo: 'pin_drop' },
    { route: 'favorite', label: 'Merkzettel', logo: 'favorite_border' },
    { route: 'blog', label: 'Blog', logo: 'beach_access' },
  ];
  countries = ['germany', 'china', 'england', 'uruguay', 'japan'];
  panelOpenState = false;
  toggleExpansionPanel() {
    this.panelOpenState = !this.panelOpenState;
  }
}
