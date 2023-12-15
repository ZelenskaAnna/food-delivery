import { Component } from '@angular/core';

@Component({
  selector: 'app-home-restaraunts',
  templateUrl: './home-restaraunts.component.html',
  styleUrls: ['./home-restaraunts.component.scss'],
})
export class HomeRestarauntsComponent {
  public restaraunts = [
    {
      img: 'assets/royal-sushi.png',
      indicator: 'Featured',
      title: 'Royal Sushi House',
      time: '30-40 min',
      price: '$32 min sum',
      cart: 0,
      tags: [
        {
          img: 'assets/sushi.png',
          title: 'Sushi',
        },
      ],
    },
    {
      img: 'assets/burgers.png',
      indicator: 'Featured',
      title: 'Burgers & Pizza',
      time: '40-60 min',
      price: '$24 min sum',
      cart: 2,
      tags: [
        {
          img: 'assets/burger.png',
          title: 'Burger',
        },
        {
          img: 'assets/pizza.png',
          title: 'Pizza',
        },
      ],
    },
    {
      img: 'assets/ninja-sushi.png',
      indicator: '',
      title: 'Ninja sushi',
      time: '20-40 min',
      price: '$40 min sum',
      cart: 0,
      tags: [
        {
          img: 'assets/sushi.png',
          title: 'Sushi',
        },
      ],
    },
    {
      img: 'assets/sushi-master.png',
      indicator: '',
      title: 'Sushi master',
      time: '60-70 min',
      price: '$49 min sum',
      cart: 0,
      tags: [
        {
          img: 'assets/sushi.png',
          title: 'Sushi',
        },
      ],
    },
    {
      img: 'assets/japanese.png',
      indicator: '',
      title: 'Japanese sushi',
      time: '30-50 min',
      price: '$104 min sum',
      cart: 0,
      tags: [
        {
          img: 'assets/sushi.png',
          title: 'Sushi',
        },
      ],
    },
    {
      img: 'assets/kobe.png',
      indicator: '',
      title: 'Kobe',
      time: '20-30 min',
      price: '$57 min sum',
      cart: 0,
      tags: [
        {
          img: 'assets/sushi.png',
          title: 'Sushi',
        },
      ],
    },
  ];
}
