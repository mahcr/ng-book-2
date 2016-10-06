import { Component } from '@angular/core';

@Component({
    selector: 'hello-word',
    template: ` 
        <div> Hola {{ name }} </div>
        <ul>
            <li *ngFor="let name of list"> {{ name }}</li>
        </ul>
    `
})
export class HelloWord { 

    list:string[];
    name: string;

    constructor() {
        this.list = ['Mariano', 'Alvarez', 'Harbottle'];
        this.name = 'Usuario';
    }
}