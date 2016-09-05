import { Component, OnInit } from '@angular/core';
import { ColorCodesComponent } from './colorCodes/colorCodes.component';
import { ColorRulesComponent } from './colorRules/colorRules.component';
import { ImageLibraryComponent } from './imageLibrary/imageLibrary.component';

@Component({
    templateUrl: 'app/styleguide/colorAndImages/colorAndImages.html',
    directives: [ColorCodesComponent, ColorRulesComponent, ImageLibraryComponent]
})
export class ColorAndImagesComponent implements OnInit {

    constructor() { }

    ngOnInit() {

    }
}