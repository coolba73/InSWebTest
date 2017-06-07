import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainLayoutComponent } from "./layouts/mainlayout.component";
import { AccountComponent } from "./account/account.component";

export const routes : Routes = [
    {
        path:'main',
        component: MainLayoutComponent
    },
    {
        path:'',
        component : AccountComponent
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}