import {Component} from 'angular2/core'
import {Router} from 'angular2/router'
import {Observable} from 'rxjs/Rx'
@Component({
    templateUrl:"app/PokeDex/pokeball.component.html",
    styleUrls:["app/PokeDex/pokeball.component.css"]
})
export class PokeBall{
    constructor(public _router:Router){

      
    }
     isPokeBallOpen:boolean=false;
     navigateToPokeDex(router:Router):void{
       router.navigate(['PokeDex']);
      
     }
    openPokeDex():void {
        if(this.isPokeBallOpen)
            {
              let subscription =  Observable.timer(2300,0).subscribe(t=>{
                    this.navigateToPokeDex(this._router);
                    subscription.unsubscribe();
                })
             //   window.setTimeout(this.navigateToPokeDex, 4000);
            }
    }
}