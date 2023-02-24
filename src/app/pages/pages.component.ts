import { Component, OnInit } from '@angular/core';
import { SettingService } from '../services/setting.service';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styles: [
    ]
})
export class PagesComponent implements OnInit {

    constructor(private settingsService: SettingService) {

    }

    ngOnInit(): void {

    }



}
