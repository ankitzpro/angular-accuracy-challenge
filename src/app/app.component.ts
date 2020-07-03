import { Component,HostListener,Input,OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { SwitchService} from './accuracy.service';

 
 
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})
export class AppComponent  {

@Input() gameData:any;

  constructor(private routers:Router,private service:SwitchService ){
  }
 ngOnInit() {

    this.routers.navigate(['']);
  }

}