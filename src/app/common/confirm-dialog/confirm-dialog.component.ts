import { Component, Input, Output, EventEmitter, OnInit, ViewChild, ElementRef, OnChanges, AfterViewInit  } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'confirm-dialog',
  templateUrl: './confirm-dialog.component.html'
})
export class ConfirmDialog implements OnInit, OnChanges, AfterViewInit {

    @Input() title: string;
    @Input() body: string;
    @Input() toggle: boolean;
    @Output() confirm = new EventEmitter<any>();
    @Output() close = new EventEmitter<any>();

    @ViewChild('confirmModal', {static: true}) modal: ElementRef

    ngOnInit(){
        this.toggleModal();


    }

    ngAfterViewInit(){
    }

    ngOnChanges(){
        this.toggleModal();
    }

    toggleModal(){
        document.getElementById("openModalButton").click();
    }

    continue(){
        this.toggleModal();
        this.confirm.emit();
    }

    exit(){
        this.toggleModal();
        this.close.emit();
    }
}
