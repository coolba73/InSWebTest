import { Component } from "@angular/core";
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

export interface ConfirmModel{
    title:string;
    message:string;
}

@Component({
    templateUrl:'./popup.confirm.component.html'
})
export class PopupConfirmComponent extends DialogComponent<ConfirmModel,boolean> implements ConfirmModel{
    
    title:string;
    message:string;

    constructor(dialogService : DialogService){
        super(dialogService);
    }

    confirm(){
        this.result = true;
        this.close();
    }
}