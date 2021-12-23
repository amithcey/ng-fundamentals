import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from "./shared/events.service";

@Component({
    templateUrl: './create-event-component.html',
    styles: [`
        em { float: right; color: red; padding-left: 10px }
        .error input { background-color: red }
    `]
})

export class CreateEventComponent {
    isDirty: boolean = false; // if true will restrict user to go back, ask a confirmation etc
    newEvent;

    constructor(private router: Router,
        private eventService: EventService) { }

    ngOnInit() {
        this.newEvent = {
            'name': 'Already existing Event',
            'price': 999.9
        }
    }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues);
        this.router.navigate(['/events']);
    }

    cancel() {
        this.router.navigate(['/events']);
    }
}