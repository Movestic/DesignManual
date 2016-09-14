import { Component, OnInit } from '@angular/core';
import {RulesComponent} from './rules/rules.component'
@Component({
    templateUrl: 'app/styleguide/dataAndStatistics/dataAndStatistics.html',
    directives:[RulesComponent]
})
export class DataAndStatisticsComponent implements OnInit {
    constructor() {
         console.log("test");
    }

    ngOnInit() {
    }
}