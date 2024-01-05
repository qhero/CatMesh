import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";


@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  imports: [
    RouterLinkActive,
    RouterLink,
  ],
  standalone:true
})
export class HeaderComponent {}
