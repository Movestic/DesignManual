import { Component, OnInit } from '@angular/core';
import {FontsComponent} from './fonts/fonts.component';
import {ColorsComponent} from './colors/colors.component';
import {TablesListsParagraphsComponent} from './tablesListsParagraphs/tablesListsParagraphs.component';

@Component({
    templateUrl: 'app/styleguide/typography/typography.html',
    directives:[FontsComponent, ColorsComponent, TablesListsParagraphsComponent]
})
export class TypographyComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}