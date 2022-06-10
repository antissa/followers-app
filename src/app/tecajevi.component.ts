import { Component } from "@angular/core";
import { TecajeviService } from "./tecajevi.service";
import { InputPipe } from "./inputtext.pipe";

@Component({
    selector: 'tecajevi',
    template: `
    <h3>{{title}}</h3>
<!--    
    //DIRECTIVES
    <ul>
        <li *ngFor="let tecaj of tecajevi">
            {{ tecaj }}
        </li>
    </ul> 
    //PROPERTY BINDING
    <img src="{{imgURL}}"/>
    <img [src]="imgURL"/>
    //ATTRIBUTE BINDING
    <table>
        <Tr>
            <td [attr.colspan]="colSpan"></td>
        </Tr>
    </table>
    
    //BOOTSTRAP AND CLASS BINDING
    <button class="btn btn-success" [class.active]="isActive">Submit</button>

    //STYLE BINDING
    <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Submit</button>

    //EVENT BINDING
    <button (click)="onSave($event)">Save</button>

    //EVENT FILTERING
    <input (keyup.enter)="onKeyUp()"/>

    //TEMPLATE VARIABLE
    <input #mojeIme (keyup.enter)="onKeyUp(mojeIme.value)"/>

    //TWO WAY BINDING
    <input [(ngModel)]="mojeIme" (keyup.enter)="onKeyUp()"/>

    //PIPES
    {{ tecaj.naziv | uppercase }} <br/>
    {{ tecaj.studenti | number}} <br/>
    {{ tecaj.ocjena | number:'1.2-4'}} <br/>
    {{ tecaj.cijena | currency: 'EUR':true:'2.2-2' }} <br/>
    {{ tecaj.datum | date:'short'}}

    //CUSTOM PIPE
    {{text | summary:30}}-->
    `
})

export class TecajeviComponent {
    title = 'Popis tecajeva!!!';
    imgURL = "";
    colSpan = 2;
    tecajevi;
    inputTexts='';
    isActive = false;

    //ASSIGNMENT
/*     onKeyUp(inputText) {
        this.inputTexts = inputText ;
    } */
/*     text = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore nam veniam dolorem aperiam, totam minus soluta necessitatibus ducimus quas. Repellat quos quo esse est nesciunt ab perferendis laudantium cumque at.
    `

    tecaj = {
        naziv: "Dummy's course",
        studenti: 1211,
        ocjena: 4.645454545,
        cijena: 599,
        datum: new Date(2022, 6, 21)
    }

    onSave($event){
        $event.stopPropagation();
        console.log("Gumb je kliknut", $event)
    }

    onKeyUp(mojeIme) {
        console.log(mojeIme);
    }

    onKeyUp() {
        console.log(this.mojeIme);
    } */

    constructor(service: TecajeviService){
        this.tecajevi = service.getTecajevi();
    }
}