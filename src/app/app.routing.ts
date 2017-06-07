import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainLayoutComponent } from "./layouts/mainlayout.component";
import { AccountComponent } from "./account/account.component";

export const routes : Routes = [
    {
        path:'',
        component: MainLayoutComponent
    },
    {
        path:'account',
        component : AccountComponent
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}