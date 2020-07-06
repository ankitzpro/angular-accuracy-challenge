import { Component, OnInit } from '@angular/core';
import { AccuracyService} from '../../accuracy.service';
//import { Router} from '@angular/router';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html'
})
export class TimerComponent implements OnInit {

  constructor(private service: AccuracyService
  //,private routers:Router
  ) { }
anstext:String;
intervalId: number = 0;
message: string = '';
seconds: number = 5;

  ngOnInit() {
this.anstext=this.service.anstext;
this.countDown();
this.service.level++;
  }
  private countDown(): void {
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0 ) {
        if(this.service.level>=10){
         // this.routers.navigate(['/start'],{ skipLocationChange: true })
         this.service.changeCompo('Start');
        }
        else{
        this.service.seconds=10;
        //this.routers.navigate(['/game'],{ skipLocationChange: true })
         this.service.changeCompo('Game');
      } 
    }
    }, 1000);
  }
}
