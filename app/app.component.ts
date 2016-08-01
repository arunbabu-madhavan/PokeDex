import {Component} from 'angular2/core';
import {PokeBall} from './PokeDex/pokeball.component'
import {PokeDex} from './PokeDex/pokedex.component'
import{NavigationBar} from './navbar.component'
import{Router,ROUTER_DIRECTIVES,ROUTER_PROVIDERS,RouteConfig} from 'angular2/router'; 

@Component({
selector:'poke-dex',
templateUrl:'app/app.component.html',
directives:[NavigationBar,ROUTER_DIRECTIVES],
providers:[ROUTER_PROVIDERS]
})
@RouteConfig([{path:"/home",name:'Home',component:PokeBall,useAsDefault:true},
{path:"/pokedex",name:'PokeDex',component:PokeDex}])
export class AppComponent{
    constructor(private _router:Router)
    {}
   
}
