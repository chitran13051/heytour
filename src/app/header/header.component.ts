import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

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
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  headerLinks = [
    'Contact',
    'Newsletter',
    'Reisburo',
    'My Account',
    'Merkezette',
  ];

  countries = ['germany', 'china', 'england', 'uruguay', 'japan'];
  panelOpenState = false;
  toggleExpansionPanel() {
    this.panelOpenState = !this.panelOpenState;
  }
}
