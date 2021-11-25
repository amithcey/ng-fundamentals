import { Component } from "@angular/core";

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr />
        <event-thumbnail 
            [event]="event1"
            (eventClicked)="handleParentAction($event)">
        </event-thumbnail>
    </div>  
    `
})

export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '03/11/2021',
        time: '10:00 am',
        price: 599.00,
        imageUrl: 'app/assets/images/angularconnect-shield.png',
        location: {
            address: 'No 2047, Wash Bow Bldg',
            city: 'London',
            country: 'England'
        }
    }

    handleParentAction(eventName) {
        console.log('Passing event name back to parent: ', eventName);
    }
}