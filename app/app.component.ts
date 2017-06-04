import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    styles: [`
        piechart {
            display: block;
            clear: both;
            margin-top: 30px;
        }
        
        barchart {
            margin: 30px;
        }
        
        h3 {
            margin-top:20px;
            margin-bottom: 0;
        }
    `],
    template: `
  <h1>Jude jigsaw</h1>
  <hr/>
  
  <p><smiley [size]="100" [color]="'red'"> </smiley></p>
`
})
export class AppComponent {
    getRandomInt(max = 100) {
        return Math.floor(Math.random()*max);
    }
}