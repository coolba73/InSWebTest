import { Component } from "@angular/core";
import { DialogService } from "ng2-bootstrap-modal";
import { PopupConfirmComponent } from "../popup/popup.confirm.component";

@Component({
    templateUrl:'./mainlayout.component.html',
    styleUrls:['./mainlayout.component.css']
})
export class MainLayoutComponent{
    
    timelines = [];

    constructor(private dialogService:DialogService){}

    btndw_click()
    {
        //this.timelines.push(3);
        // this.popupService.NewPost('New Post').subscribe(res => alert(res));
        let disposable = this.dialogService.addDialog(PopupConfirmComponent,{
            title:'test',
            message:'Confirm Message'
        }).subscribe((isConfirmed)=>{
            if(isConfirmed)
            {
                alert('accept');
            }
            else
            {
                alert('declined');
            }
        });

        
    }
}