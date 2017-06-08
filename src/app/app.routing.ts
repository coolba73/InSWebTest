import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainLayoutComponent } from "./layouts/mainlayout.component";
import { AccountComponent } from "./account/account.component";
import { CardLayout01Component } from "./cardlayout/cardlayout01.component";
import { Test01Component } from "./test/test01.component";
import { Mainlayout02Component  } from "./layouts/mainlayout02.component";

export const routes : Routes = [
    {
        path:'main',
        component: MainLayoutComponent
    },
    {
        path:'',
        component : AccountComponent
    },
    {
        path:'test',
        component : Test01Component
    },
    {
        path:'main2',
        component : Mainlayout02Component,
        children:[
            {
                path:'card',
                loadChildren: './cardlayout/cardlayout.module#CardLayoutModule'
            }
        ]
    }


];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}