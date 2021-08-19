/**
 * import of 
 * components
 * libraries 
 * services
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { HouseComponent } from './components/house/house.component';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HomeComponent } from './components/home/home.component';
import { MatHeaderRow, MatHeaderRowDef, MatIcon, MatPaginator, MatRow, MatRowDef, MatSort, MatTabHeader, MatTable, MatTableDataSource } from '@angular/material';
import { MaterialModule } from './material.module';
import { FilterPipe } from './pipes/filters.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HouseComponent,
    ListStudentsComponent,
    HomeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing,
    BrowserAnimationsModule,
    MatSliderModule,
    MaterialModule
  ],
  /**
   * Routing
   */
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
