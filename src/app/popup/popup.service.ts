import { Observable } from "rxjs/Rx";
import { PopupNewPostComponent } from "./popup.newpost.component";
import { MdDialogRef, MdDialog, MdDialogConfig } from "@angular/material";
import { Injectable } from "@angular/core";

@Injectable()
export class PopupService{
    
    constructor(private dialog:MdDialog){}

    public NewPost(title:string) : Observable<boolean>{

        let dialogRef : MdDialogRef<PopupNewPostComponent>;

        dialogRef = this.dialog.open(PopupNewPostComponent);

        dialogRef.componentInstance.title = title;

        return dialogRef.afterClosed();
    }

}