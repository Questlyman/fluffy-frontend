import { Component } from '@angular/core';

@Component({
  selector: 'app-header-component',
  imports: [],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss'
})
export class HeaderComponent {
  isMenuOpen: boolean = false;
  langMenuOpen: boolean = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  toggleLangMenu() {
    this.langMenuOpen = !this.langMenuOpen;
  }
  nav_items: string[] = ['Something', 'Contacts'];
}

