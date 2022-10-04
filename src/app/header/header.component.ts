import {Component, EventEmitter, Input, Output} from '@angular/core'

@Component({
    selector: 'app-header',
    templateUrl:'./header.component.html'

}
) 
    export class HeaderComponent{
        //testVar = 'YO';
        // @Output() youClicked = new EventEmitter<string>()
        // onClickyClick(){
        //     this.youClicked.emit(this.testVar)
        // }  ..custom event outputted from header to app

        @Input() farts2: string;

    }
