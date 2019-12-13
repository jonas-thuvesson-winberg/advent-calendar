import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { BoardModule } from "./board/board.module";

import { AppComponent } from "./app.component";
import { SnowComponent } from "./snow/snow.component";

@NgModule({
  declarations: [AppComponent, SnowComponent],
  imports: [BrowserModule, AppRoutingModule, BoardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
