import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

import './legacy-assets/base.js';
import './legacy-assets/movable.js';
import './legacy-assets/floor.js';
import './legacy-assets/user.js';
import './legacy-assets/elevator.js';
import './legacy-assets/interfaces.js';
import './legacy-assets/world.js';
import './legacy-assets/presenters.js';
import './legacy-assets/challenges.js';
import './legacy-assets/fitness.js';
import { onAppRoute, initializeApp } from './legacy-assets/app';
// import './legacy-assets/app';

@Component({
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./style.css', './app.component.css', '../../node_modules/codemirror/theme/solarized.css']
})
export class AppComponent implements OnInit {
  title = 'ng-elevator-saga';

  constructor(router: Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      debugger;

      setTimeout(() =>  onAppRoute(event.urlAfterRedirects), 5000);

    });
  }

  ngOnInit(): void {
    initializeApp();
  }
}
