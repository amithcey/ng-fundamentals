import { Component } from "@angular/core";

@Component({
    selector: 'events-list',
    template: `
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr/>
            <div class="well hoverwell thumbnail">
                <h2>{{event.name}}</h2>
                <div>Date: {{event.date}}</div>
                <div>Time: {{event.time}}</div>
                <div>Price: \${{event.price}}</div>
                <div>
                    <span>Location: {{event.location.address}}</span>
                    <span>&nbsp;</span>
                    <span>{{event.location.city}}, {{event.location.country}}</span>
                </div>
            </div>
        </div>
    `
})

export class EventsListComponent {
    event = {
        id: 1,
        name: 'Angular Connect',
        date: '03/11/2021',
        time: '10:00 am',
        price: 599.00,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: 'No 2047, Wash Bow Bldg',
            city: 'London',
            country: 'England'
        }
    }
}