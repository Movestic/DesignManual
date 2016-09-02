import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'app/styleguide/colorAndImages/colorAndImages.html'
})
export class ColorAndImagesComponent implements OnInit {

    public primaryColors: string[];
    public complementaryColors: string[];
    public additionalColors: string[];

    constructor() { }

    ngOnInit() {
        this.initPrimaryColors();
        this.initComplementaryColors();
        this.initAdditionalColors();
    }

    private initPrimaryColors() {
        this.primaryColors = [
            "orange",
            "black",
            "gray",
            "light-gray",
            "white"
        ];
    }

    private initComplementaryColors() {
        this.complementaryColors = [
            "blue",
            "green",
            "red"
        ];
    }

    private initAdditionalColors() {
        this.additionalColors = [
            "additionalColor1",
            "additionalColor2",
            "additionalColor3",
            "additionalColor4",
            "additionalColor5",
            "additionalColor6",
            "additionalColor7",
            "additionalColor8"
        ];
    }
}