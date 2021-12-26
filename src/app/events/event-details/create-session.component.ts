import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ISession } from "../shared/event.model";
import { restrictedWords } from "../shared/restricted-words.validator";

@Component({
    templateUrl: './create-session.component.html',
    styles: [`
        em { float: right; color: red; padding-left: 10px }
        .error input, .error select, .error textarea { background-color: red }
    `]
})

export class CreateSessionComponent implements OnInit {

    newSessionForm: FormGroup
    name: FormControl
    presenter: FormControl
    duration: FormControl
    level: FormControl
    abstract: FormControl

    ngOnInit() {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required,
            Validators.maxLength(400),
            restrictedWords(['foo', 'bar'])]); // this custom validator restricts words foo and bar

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract,
        })
    }

    saveSession(newSession) {

        // for type safety, map to the model
        let session: ISession = {
            id: undefined,
            name: newSession.name,
            duration: +newSession.duration,
            presenter: newSession.presenter,
            level: newSession.level,
            abstract: newSession.abstract,
            voters: []
        }

        console.log(session);
    }
}