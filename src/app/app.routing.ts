import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainLayoutComponent } from "./layouts/mainlayout.component";
import { AccountComponent } from "./account/account.component";
import { CardLayout01Component } from "./cardlayout/cardlayout01.component";
import { Test01Component } from "./test/test01.component";

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
        path:'card',
        component : CardLayout01Component
    },
    {
        path:'test',
        component : Test01Component
    },
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}