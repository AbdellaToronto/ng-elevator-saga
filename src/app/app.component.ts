import {Component, ViewEncapsulation} from '@angular/core';
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
import './legacy-assets/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./style.css', './app.component.css', '../../node_modules/codemirror/theme/solarized.css']
})
export class AppComponent {
  title = 'ng-elevator-saga';
}
