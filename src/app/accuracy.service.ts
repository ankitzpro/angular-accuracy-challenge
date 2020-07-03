import { Injectable,Output,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {
@Output() scoreData:EventEmitter<any>= new EventEmitter(); 
  level=0;

anstext='';

intervalId: number = 0;
seconds: number = 10;
score=0;

  clearTimer() { clearInterval(this.intervalId); }

  scoreCalc(text){

    this.anstext=text;
       if(this.anstext=='Level Passed \n Correct Answer'){
         this.score=this.score+this.seconds;
       }
       if(this.level==9){
          this.anstext='Your Final Score: '+(this.score).toFixed(2);
       }

  }
}