import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchText: string = '';
  isSearchTextEmpty: boolean = true;
  // isMenuOpen = false;
  
  onSearch() {
    console.log('Search text:', this.searchText);
    this.isSearchTextEmpty = this.searchText.trim() === '';
  }
  // toggleMenu() {
  //   this.isMenuOpen = !this.isMenuOpen;
  // }
}
