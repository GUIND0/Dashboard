import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
     trigger('routeAnim', [
        transition('* => *',[
          query(':enter',[
            style({
              background: 'wheat'
            }),
          ],{optional: true}),

          style({
            background: 'blue'
          }),
          animate(1000, style({
            background: 'violet'
          })),
          animate(1000,)
        ])
     ])
  ]
})
export class AppComponent {
  
  prepareRoute(outlet: RouterOutlet): any{
    if(outlet.isActivated) return outlet.activatedRoute.snapshot.url;
  }

}
