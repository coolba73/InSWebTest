import { NgModule } from "@angular/core";
import { CardLayout01Component } from "./cardlayout01.component";
import { CardLayoutRoutingModule } from "./cardlayout.routing";

@NgModule({
    imports:[
        CardLayoutModule
    ],
    declarations:[
        CardLayout01Component
    ]
})
export class CardLayoutModule{}