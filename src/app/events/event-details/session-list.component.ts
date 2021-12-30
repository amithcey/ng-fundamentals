import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from "../shared/event.model";

@Component({
    selector: 'sessions-list',
    templateUrl: './session-list.component.html'
})

export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[]
    @Input() filterBy: string
    visibleSessions: ISession[] = []

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
        }       
    }

    filterSessions(filterBy: string) {
        if (filterBy == 'all') {
            this.visibleSessions = this.sessions.slice(0); // this creates a copy of sessions to visible sessions
        }
        else {
            this.visibleSessions = this.sessions.filter(s => s.level.toLowerCase() === filterBy);
        }
    }
}