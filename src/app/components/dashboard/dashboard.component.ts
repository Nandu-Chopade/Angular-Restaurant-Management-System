import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  cardData = [
    {
      title: 'Home',
      // subtitle: 'Card 1 Subtitle',
      image: '../../../../assets/images/home.jpg',
      alt: 'Restaurant',
      content: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.',
      buttons: ['Read More'],
      link:'/dashbord',
    },
    {
      title: 'Shef',
      // subtitle: 'Card 1 Subtitle',
      image: '../../../../assets/images/shef.jpg',
      alt: 'Shef',
      content: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.',
      buttons: ['Read More'],
      link:'/shef',
    },
    {
      title: 'Menu',
      // subtitle: 'Card 1 Subtitle',
      image: '../../../../assets/images/food.jpg',
      alt: 'Menu',
      content: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.',
      buttons: ['Read More'],
      link:'/menu',
    },
    {
      title: 'Events',
      // subtitle: 'Card 1 Subtitle',
      image: '../../../../assets/images/events.jpg',
      alt: 'Events',
      content: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.',
      buttons: ['Read More'],
      link:'/events',
    },
    
    {
      title: 'Category',
      // subtitle: 'Card 1 Subtitle',
      image: '../../../../assets/images/category.jpg',
      alt: 'Category',
      content: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.',
      buttons: ['Read More'],
      link:'/categories',
    },
    {
      title: 'Best Of',
      // subtitle: 'Card 1 Subtitle',
      image: '../../../../assets/images/bestof.jpg',
      alt: 'Best-of',
      content: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.',
      buttons: ['Read More'],
      link:'/best-of',
    },
    {
      title: 'Book A Table',
      // subtitle: 'Card 1 Subtitle',
      image: '../../../../assets/images/booktable.jpg',
      alt: 'bookatable',
      content: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.',
      buttons: ['Read More'],
      link:'/booktable',
    },
    {
      title: 'Contact Us',
      // subtitle: 'Card 1 Subtitle',
      image: '../../../../assets/images/contact.jpg',
      alt: 'contact',
      content: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.',
      buttons: ['Read More'],
      link:'/contact',
    },
  ];

}
