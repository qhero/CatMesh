import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  styleUrl: './header.component.css',
  templateUrl: './header.component.html',
  imports: [RouterLinkActive, RouterLink, MatSidenavModule],
  standalone: true,
})
export class HeaderComponent {}
