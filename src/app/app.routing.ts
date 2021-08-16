import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";

/**
 * Next, we import the components that we are going to use.
 */
import { HouseComponent } from "./components/house/house.component";



/**
 * Step to follow, make the routes.
 */

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'house', component: HouseComponent},
    {path: '**', component: HomeComponent}

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);//search the routes in the route arrangement