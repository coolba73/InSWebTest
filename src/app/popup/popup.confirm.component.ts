import { Component ,ViewEncapsulation} from "@angular/core";
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

export interface ConfirmModel{
    title:string;
    message:string;
}

@Component({
    templateUrl:'./popup.confirm.component.html'
    ,styleUrls:[
        './popup-01.css',
        './popup-02.css',
        './popup-03.css',
        './popup-04.css',
        './popup-06.css',
        ]
    ,encapsulation: ViewEncapsulation.Native

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