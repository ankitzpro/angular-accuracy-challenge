import { Component} from '@angular/core';
import { AccuracyService} from '../../accuracy.service';


//import { Router} from '@angular/router';


@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: [ './game.component.css' ],
})

export class GameComponent  {
  constructor(private service:AccuracyService, 
  //private routers:Router 
  ) { }


  eventText = '';
  level=this.service.level+1;
 numstring:any='';
  progress:any;
  whitespace:any;
  randpos:number;
  seconds:number=this.service.seconds;
  ngOnInit() {
    
    this.progress=Math.floor(Math.random() * 90)+10;
    console.log('progress'+this.progress)
    this.whitespace=100-this.progress;
    this.countDown();
}
  

insertChar(char){
var a= ""+this.numstring+char;
var y: number = +a;
if(y < 100){
this.numstring=""+this.numstring+char;
}
else{
  alert('Number cannot be greater than 99');
}
console.log(this.numstring);
}
 insertNum(a){
   console.log(a);
   var b= (<HTMLInputElement>event.target).value;
     this.numstring=b;
 }


 private countDown(): void {
    this.service.intervalId = window.setInterval(() => {
      this.seconds -= 0.1;
      this.service.seconds=this.seconds;
      if ((this.seconds).toFixed(1) == '0.0') {
        this.service.anstext="You didn't attempted";
        //this.routers.navigate(['/timer'],{ skipLocationChange: true })

this.service.changeCompo('Timer');
      } 
    }, 100);
  }

  submit(){
   var diff=this.progress-this.numstring; 
  this.service.scoreCalc( Math.abs(diff));
  this.service.changeCompo('Timer');
  }

}