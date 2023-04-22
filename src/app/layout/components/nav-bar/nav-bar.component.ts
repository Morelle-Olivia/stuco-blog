import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {I18nService} from "../../../translate/translate/i18n.service";

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
    lang = 'fr';
    @ViewChild("menuToggle", {static: true}) menu?: ElementRef;

    constructor(
        private _i18n: I18nService
    ) {
    }

    ngOnInit(): void {
        this.lang = this._i18n.getCurrentLanguage().id;
    }

    switchLanguage(data: any) {
        this._i18n.useLanguage(data.target.value)
    }

    closeMenu() {
        let checkbox: HTMLInputElement =this.menu?.nativeElement;
        checkbox.click();
    }
}
