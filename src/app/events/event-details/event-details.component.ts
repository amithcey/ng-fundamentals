import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "../shared/event.model";
import { EventService } from "../shared/events.service";

@Component({
    selector: 'event-details',
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px; }    
        .event-image { height: 100px; }
    `]
})

export class EventDetailsComponent implements OnInit {

    event: IEvent;

    constructor(private eventService: EventService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        const idFromRoute = this.route.snapshot.params['id'];
        this.event = this.eventService.getEvent(+idFromRoute);
    }

}