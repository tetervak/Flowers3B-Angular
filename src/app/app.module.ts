import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FlowerDetailsComponent} from './flower-details/flower-details.component';
import {FlowerDataService} from './flower-data.service';
import {HttpClientModule} from '@angular/common/http';
import { FlowerTableComponent } from './flower-table/flower-table.component';
import {RouterModule, Routes} from '@angular/router';
import {FooterComponent} from './footer/footer.component';

const routes: Routes = [
  {path: '', component: FlowerTableComponent},
  {path: 'flowers/:id', component: FlowerDetailsComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    FlowerDetailsComponent,
    FlowerTableComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FlowerDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
