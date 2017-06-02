import { Component } from "@angular/core";
import { DialogService } from "ng2-bootstrap-modal";
import { PopupConfirmComponent } from "../popup/popup.confirm.component";
import { DialogTest01Component } from "../dialog/dialog.test01.component";
import { MdDialog, MdDialogRef } from "@angular/material";

@Component({
    templateUrl:'./mainlayout.component.html',
    styleUrls:['./mainlayout.component.css']
})
export class MainLayoutComponent{
    
    timelines = [];

    

    constructor(public dialog:MdDialog){}

    btndw_click()
    {
        //this.timelines.push(3);
        // this.popupService.NewPost('New Post').subscribe(res => alert(res));
        // let disposable = this.dialogService.addDialog(PopupConfirmComponent,{
        //     title:'test',
        //     message:'Confirm Message'
        // }).subscribe((isConfirmed)=>{
        //     if(isConfirmed)
        //     {
        //         // alert('accept');
        //         this.timelines.push(1);
        //     }
        //     else
        //     {
        //         // alert('declined');
        //     }
        // });

        let dialogRef = this.dialog.open(DialogTest01Component);

        dialogRef.afterClosed().subscribe(result=> {
            // alert(result);
            this.timelines.push(1);
        });
        
        
        
    }

    btn01_click()
    {
        this.timelines.push(1);
    }
}