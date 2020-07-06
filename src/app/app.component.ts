import { Component,HostListener,Input,OnInit } from '@angular/core';
import { AccuracyService} from './accuracy.service';
import { Subscription } from 'rxjs';

 
 
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})
export class AppComponent  {

@Input() gameData:any;

  constructor(private service:AccuracyService ){
  }
  composh:any
  sub:Subscription;
 ngOnInit() {
  this.sub = this.service.compoShow$.subscribe(compoShow => this.composh = compoShow);

  }

}