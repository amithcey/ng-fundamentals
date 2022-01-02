import { Directive, Inject, OnInit, ElementRef, Input } from "@angular/core";
import { JQ_TOKEN } from ".";

@Directive({
    selector: '[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit {
    private el: HTMLElement;
    @Input('modal-trigger') modalId: string;

    constructor(ref: ElementRef,
        @Inject(JQ_TOKEN) private $: any) { // attach a click event handler to whatever element it is created on
            this.el = ref.nativeElement;
        } 

    ngOnInit(): void {
        // we need to listen to the click event of the element where this directive is used
        this.el.addEventListener('click', e => {
            this.$(`#${this.modalId}`).modal({});
        })
    }
}