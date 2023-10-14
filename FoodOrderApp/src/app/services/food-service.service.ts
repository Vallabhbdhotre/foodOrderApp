import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  constructor() { }

getList(){
  return [
    'assets/images/machurian.webp',
    'assets/images/burger.jpg',
    'assets/images/friedrice.jpg',
    'assets/images/noodles.jpeg',
    'assets/images/pizza.jpeg',
    'assets/images/sandwitch.jpg',
    'assets/images/soup.jpg',
    'assets/images/Vada-Pav.webp',
    'assets/images/pancake.webp'
  ]
}

}
