import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/hero';
import { HeroService } from '../shared/hero.service';
import { MessageService } from '../shared/message.service';
import { HEROES } from '../shared/mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}