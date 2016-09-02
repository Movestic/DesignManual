import { Component, OnInit } from '@angular/core';
import {NavigationBarItem} from "./navigationBarItem";

@Component({
    selector: 'navigation',
    templateUrl: 'app/navigation/navigation.html'
})
export class NavigationComponent implements OnInit {
    constructor() { }

    public navigationLinks: NavigationBarItem[];

    ngOnInit() {
        this.navigationLinks = this.buildNavigationBarItems();
    }

    private buildNavigationBarItems(): NavigationBarItem[]
    {
        return [
            {
                title: "Typografi",
                route: "/style-guide/typography"
            },
            {
                title: "Färg & bild",
                route: "/style-guide/color-and-images"
            },
            {
                title: "Video",
                route: "/style-guide/video"
            },
            {
                title: "Data & statistik",
                route: "/style-guide/data-and-statistics"
            },
            {
                title: "Meddelanden",
                route: "/style-guide/messages"
            },
            {
                title: "Formulär",
                route: "/style-guide/forms"
            },
            {
                title: "Ikoner & assets",
                route: "/style-guide/icons-and-assets"
            },
            {
                title: "Knappar & navigation",
                route: "/style-guide/buttons-and-navigation"
            },
            {
                title: "Meny",
                route: "/style-guide/menu"
            }
        ];
    }
}