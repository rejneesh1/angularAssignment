import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})

export class CurrencyConverterComponent implements OnInit {
  
  currency:any[]=[]
  name:string;
  symbol:string;
  value:string;
  convertedamt:number;
  cursymbol:string;


  constructor() {}

  ngOnInit() {}

  
  remCurrency(rname){
   for(var i=0;i<this.currency.length;i++){
      if(this.currency[i].name==rname){
          this.currency.splice(i, 1);
          break;
          }
      }

  }

  addCurrency(name:string,symbol:string,value:number){
    this.currency.push(new CreateCur(name,symbol,value))
    this.name='';
    this.symbol='';
    this.value='';
  }
  calculateCurrency(amount,convertcurrency){
    for (var i = 0; i < this.currency.length; i++) {
      if (this.currency[i].name==convertcurrency) {
        break
      }
    }
    this.convertedamt= this.currency[i].value*amount;
    this.cursymbol=this.currency[i].symbol;
  }
}
  
function CreateCur(name, symbol, value){
 this.name=name;
 this.symbol=symbol;
 this.value=value;
}




