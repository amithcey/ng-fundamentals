import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from "../shared/event.model";

@Component({
    selector: 'sessions-list',
    templateUrl: './session-list.component.html'
})

export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[]
    @Input() filterBy: string
    @Input() sortBy: string
    visibleSessions: ISession[] = []

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? this.visibleSessions.sort(this.sortByName) : this.visibleSessions.sort(this.sortByVote);
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

    sortByName(s1: ISession, s2: ISession): number {
        if (s1.name > s2.name) return 1;
        else if (s1.name === s2.name) return 0;
        else return -1;
    }

    sortByVote(s1: ISession, s2: ISession): number {
        return s2.voters.length - s1.voters.length;
    }
}