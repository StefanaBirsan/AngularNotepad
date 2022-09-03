import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ThoughtsComponent } from './components/thoughts/thoughts.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, ThoughtsComponent, ListComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
