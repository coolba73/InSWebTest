import { Component } from "@angular/core";
import { MdDialog, MdDialogRef } from "@angular/material";

@Component({
    templateUrl:'./dialog.test01.component.html'
})
export class DialogTest01Component{
    constructor(public dialogRef:MdDialogRef<DialogTest01Component>){}
}