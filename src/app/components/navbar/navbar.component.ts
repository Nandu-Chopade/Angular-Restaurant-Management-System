import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;

  isExpanded = false;

  navItemList = [
    { name: "Home", link: "/dashboard", icon: "dashboard" },
    { name: "About", link: "/about", icon: "assignment" },
    { name: "Category", link: "/menus", icon: "restaurant" },
    { name: "Menus", link: "/menus", icon: "menu" },
    { name: "Book A Table", link: "/booktable", icon: "book" },
    { name: "Shef", link: "/shef", icon: "person" },
    { name: "Events", link: "/events", icon: "event" },
    { name: "Best-Of", link: "/best-of", icon: "grade" },
    { name: "Piecharts", link: "/mainchart", icon: "people" },
    { name: "Reviews", link: "/reviews", icon: "newspapers" },
    { name: "Contact", link: "/contact", icon: "phone" },
  ];

  // mouseenter() {
  //   if (!this.isExpanded) {
  //     this.sidenav.open();
  //   }
  // }

  // mouseleave() {
  //   if (!this.isExpanded) {
  //     this.sidenav.close();
  //   }
  // }

  setCollapsed() {
    this.isExpanded = !this.isExpanded;
  }

  getSidenavWidth() {
    return this.isExpanded ? '250px' : '65px';
  }
}
