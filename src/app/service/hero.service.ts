import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroList: Hero[] = [
    {
      id: 1,
      name: "Wolverine",
      superPower: "strong",
      address: "Canada",
    },
    {
      id: 2,
      name: "Magneto",
      superPower: "magnetic",
      address: "Germany",
    },
    {
      id: 3,
      name: "Deadpool",
      superPower: "regeneration",
      address: "Manhattan",
    },
    {
      id: 4,
      name: "Storm",
      superPower: "manipulate weather",
      address: "New York",
    },
    {
      id: 5,
      name: "Mystique",
      superPower: "shapeshifting",
      address: "New York",
    },
  ];

  constructor() { }

  getAll(): Hero[] {
    return this.heroList;
  }
}
