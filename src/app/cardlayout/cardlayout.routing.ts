import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";

import { CardLayout01Component } from "./cardlayout01.component";

const routes:Routes=[
    {
        path:'',
        data : {
            title : 'Card'
        },
        children:[
            {
                path:'card',
                component:CardLayout01Component
            }
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class CardLayoutRoutingModule{}