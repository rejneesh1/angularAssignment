import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ StudentlistComponent } from './studentlist/studentlist.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { TimezoneComponent } from './timezone/timezone.component';
const routes: Routes = [
  { path: '', 
  component:StudentlistComponent
  },
  { path: 'currency', 
    component:CurrencyConverterComponent
  },
  {
    path:'timezone',
    component:TimezoneComponent
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}