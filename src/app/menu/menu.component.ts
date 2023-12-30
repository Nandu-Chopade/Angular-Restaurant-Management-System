import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuItems = [
    { name: 'Salad', price: 10.99, image:'../../../../assets/images/1.jpg', description:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit." },
    { name: 'Burger', price: 15.99,image:'../../../../assets/images/2.jpg', description:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."},
    { name: 'Chiken', price: 12.99 ,image:'../../../../assets/images/3.jpg', description:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."},
    { name: 'Idli-Samber', price: 8.99,image:'../../../../assets/images/4.jpg', description:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."},
    { name: 'Salad', price: 10.99, image:'../../../../assets/images/1.jpg', description:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit." },
    { name: 'Burger', price: 15.99,image:'../../../../assets/images/2.jpg', description:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."},
   
  ];
}
