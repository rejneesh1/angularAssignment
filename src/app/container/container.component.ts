import { Component, OnInit,Input} from '@angular/core';
import{ ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  @Input() value:string;
  opop:any;
	
	constructor(private routerOb:ActivatedRoute) {
    this.routerOb.params.subscribe((params)=>{
      this.opop=params['currency']
    })
  }

  ngOnInit() {
    console.log (this.routerOb.snapshot.params);
  }
  
  mathF(){
	  this.value=(event.srcElement.textContent);
	}
}
 

