import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroesList: Hero[] = [];

  constructor(
    heroService: HeroService,
  ) {
    this.heroesList = heroService.getAll();
  }

  ngOnInit(): void {
  }

}