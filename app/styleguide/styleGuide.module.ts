import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StyleGuideComponent } from './styleGuide.component';
import { TypographyComponent } from "./typography/typography.component";
import { ColorAndImagesComponent } from "./colorAndImages/colorAndImages.component";
import { VideoComponent } from "./video/video.component";
import { DataAndStatisticsComponent } from "./dataAndStatistics/dataAndStatistics.component";
import { MessagesComponent } from "./messages/messages.component";
import { FormsComponent } from "./forms/forms.component";
import { IconsAndAssetsComponent } from "./iconsAndAssets/iconsAndAssets.component";
import { ButtonsAndNavigationComponent } from "./buttonsAndNavigation/buttonsAndNavigation.component";
import { MenuComponent } from "./menu/menu.component";

import {styleGuideRouting} from "./styleGuide.routing";

@NgModule({
    imports: [
        CommonModule,
        styleGuideRouting
    ],
    declarations: [
        StyleGuideComponent,
        TypographyComponent,
        ColorAndImagesComponent,
        VideoComponent,
        DataAndStatisticsComponent,
        MessagesComponent,
        FormsComponent,
        IconsAndAssetsComponent,
        ButtonsAndNavigationComponent,
        MenuComponent,
    ],
    providers: [],
})
export class StyleGuideModule { }
