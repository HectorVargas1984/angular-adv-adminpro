import { Component, OnInit } from '@angular/core';
import { SettingService } from '../services/setting.service';

declare function customMiFuncion(): any;

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styles: [
    ]
})
export class PagesComponent implements OnInit {

    fecha: number = new Date().getFullYear()

    constructor(private settingsService: SettingService) {

    }

    ngOnInit(): void {


    }



}
