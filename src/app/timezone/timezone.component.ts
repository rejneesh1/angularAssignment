import { Component, OnInit,Input} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.css']
})
export class TimezoneComponent implements OnInit{
  @Input() day:string;
	timezone:any[]=[];
	cname:string;
	tzone:string;
  time=new Date();
  currentTime:any;
  changedHour:number;
  changedMin:number;
  

  constructor(private cp: DatePipe) {
    this.currentTime=this.cp.transform(this.time,"shortTime")
  }

  ngOnInit() {
  }

  createTimezone(name:string,offset:string){
    this.timezone.push(new Timezone(name,offset))
  }
  
  calculateTime(time:string){
    
    let utcHour= new Date().getUTCHours();
    let utcMin=new Date().getUTCMinutes();
    if(time[0]=='+'){
      let m=time.slice(3);
      let cm = utcMin + +m;
      if(cm>=60){
        cm=cm-60;
        utcHour += 1;
      }
      let h=time.slice(1,3);
      let ch= utcHour+ +h;;
      if (ch>=24) {
        ch=ch-24;
      }
      this.changedHour=ch;
      this.changedMin=cm;
    }else{
      let m=time.slice(3);
      let cm = utcMin- +m;
      if(cm<0){
        cm=60+cm;
        utcHour -= 1;
      }
      let h=time.slice(1,3);
      let ch= utcHour- +h;;
      if (ch<0) {
        ch=24+ch;
      }
      this.changedHour=ch;
      this.changedMin=cm;
    }
  }

}

function Timezone(name,num){
 this.cname=name;
 this.tzone=num;
}


