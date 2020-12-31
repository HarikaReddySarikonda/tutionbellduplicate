import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public elemtops;
  title = 'tuitionbell';
  constructor(public router: Router){
    
  }
  ngOnInit(): void {
  if(this.router){
   // console.log("ap.compo");
    document.getElementById('spinner') .style.display = 'none';
  }
}  
<<<<<<< HEAD
=======
childEvent(e){
  this.elemtops = e;
  console.log(e);
}
>>>>>>> 8c361168c9abd60a94d7c54d32fe6c1d8542b6e6
}
