import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core'

@Component({
    selector: 'app-header',
    templateUrl:'./header.component.html'

}
) 
    export class HeaderComponent implements OnInit {
        //testVar = 'YO';
        // @Output() youClicked = new EventEmitter<string>()
        // onClickyClick(){
        //     this.youClicked.emit(this.testVar)
        // }  ..custom event outputted from header to app

        @Input() receivedParentMsg: string;

        ngOnInit() {
            console.log(this.receivedParentMsg)
        }

    }
