import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { IEvent, ISession } from "../shared/event.model";
import { EventService } from "../shared/events.service";

@Component({
    selector: 'event-details',
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px; }    
        .event-image { height: 100px; }
        a {cursor:pointer}
    `]
})

export class EventDetailsComponent implements OnInit {
    addMode: boolean;
    event: IEvent;
    filterBy: string = 'all';
    sortBy: string = 'name';

    constructor(private eventService: EventService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.event = this.eventService.getEvent(+params['id']);
        })
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        // set id as max session id + 1
        const currentMaxId = Math.max.apply(null, this.event.sessions
            .map(s => s.id));
        session.id = currentMaxId + 1;
        this.event.sessions.push(session);

        // update / save this new event
        this.eventService.updateEvent(this.event);

        // display sessions back once session save is completed
        this.addMode = false;
    }

    cancelSession() {
        this.addMode = false;
    }

}