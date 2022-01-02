import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Toastr, TOASTR_TOKEN, JQ_TOKEN, CollapsibleWellComponent, SimpleModalComponent, ModalTriggerDirective } from './common/index';
import { CreateEventComponent } from './events/create-event.component';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { SessionListComponent } from './events/event-details/session-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';
import { DurationPipe } from './events/shared/duration.pipe';
import { EventService } from './events/shared/events.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { appRoutes } from './routes';
import { AuthService } from './user/auth.service';

let toastr: Toastr = window['toastr'];
//declare let toastr: Toastr;
let jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NavBarComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    EventRouteActivator,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
     return window.confirm('Are you sure to go back without saving changes ?')
  }
  
  return true;
}
