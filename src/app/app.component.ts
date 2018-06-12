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

  colorFunction() {
    if(true){
      document.getElementById("log").style.backgroundColor = "green";
      document.getElementById("log").style.color = "white";
    }else{
      document.getElementById("log").style.backgroundColor = "green";
    }
 
  
}

        
  
}