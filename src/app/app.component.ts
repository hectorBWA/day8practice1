import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  

  count: number = 0;


   clickCount() {
        this.count++;
        }

  
}

// const button = document.getElementById("buttonText"),
//   count = 0;
// button.onclick = function() {
//   count += 1;
//   console.log("Click me: " + count);
// };
