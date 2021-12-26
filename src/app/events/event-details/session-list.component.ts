import { Component, Input } from "@angular/core";
import { ISession } from "../shared/event.model";

@Component({
    selector: 'sessions-list',
    templateUrl: './session-list.component.html'
})

export class SessionListComponent {
    @Input() sessions: ISession[]
}