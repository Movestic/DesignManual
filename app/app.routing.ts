import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";

const appRoutes: Routes = [
    {
        path: "",
        component: AppComponent
    },
    {
        path: "style-guide",
        loadChildren: "app/styleguide/styleGuide.module#StyleGuideModule"
    }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });