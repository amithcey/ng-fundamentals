import { Component, OnInit } from "@angular/core";
import { ToastrService } from "../common/toastr.service";
import { IEvent } from "./shared/event.model";
import { EventService } from "./shared/events.service";

@Component({
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr />
        <div class="row">
            <div class="col-md-5" *ngFor="let event of events">
                <event-thumbnail 
                    [event]="event"
                    (click)="handleThumbnailClick(event.name)">
                </event-thumbnail>
            </div>
        </div>
    </div>  
    `
})

export class EventsListComponent implements OnInit {

    events: IEvent[];

    constructor(private eventService: EventService,
        private toastrService: ToastrService) { }

    ngOnInit() {
        this.eventService.getEvents().subscribe((data) => {
            this.events = data;
        });
    }

    handleThumbnailClick(name) {
        this.toastrService.success(name);
    }
}