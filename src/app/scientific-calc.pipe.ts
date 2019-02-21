import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'scientificCalc'
})
export class ScientificCalcPipe implements PipeTransform {
	

  transform(num: number, args: any): any {
  	if (args==="sin") 
  		return Math.sin(num)
  	if (args==="cos") 
  		return Math.cos(num)
  	if (args==="tan") 
  		return Math.tan(num)
    
  }
}

