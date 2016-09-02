import { Routes, RouterModule } from "@angular/router";
import { TypographyComponent } from "./typography/typography.component";
import { ColorAndImagesComponent } from "./colorAndImages/colorAndImages.component";
import { VideoComponent } from "./video/video.component";
import { DataAndStatisticsComponent } from "./dataAndStatistics/dataAndStatistics.component";
import { MessagesComponent } from "./messages/messages.component";
import { FormsComponent } from "./forms/forms.component";
import { IconsAndAssetsComponent } from "./iconsAndAssets/iconsAndAssets.component";
import { ButtonsAndNavigationComponent } from "./buttonsAndNavigation/buttonsAndNavigation.component";
import { MenuComponent } from "./menu/menu.component";

const styleGuideRoutes: Routes = [
    {
        path: "",
        children: [
            {
                path: "typography",
                component: TypographyComponent
            },
            {
                path: "color-and-images",
                component: ColorAndImagesComponent
            },
            {
                path: "video",
                component: VideoComponent
            },
            {
                path: "data-and-statistics",
                component: DataAndStatisticsComponent
            },
            {
                path: "messages",
                component: MessagesComponent
            },
            {
                path: "forms",
                component: FormsComponent
            },
            {
                path: "icons-and-assets",
                component: IconsAndAssetsComponent
            },
            {
                path: "buttons-and-navigation",
                component: ButtonsAndNavigationComponent
            },
            {
                path: "menu",
                component: MenuComponent
            },
        ]
    }
];

export const styleGuideRouting = RouterModule.forChild(styleGuideRoutes);